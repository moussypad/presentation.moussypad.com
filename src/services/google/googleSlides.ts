type Id = string;

export type PresentationSummaryT = {
  pageMapId: Map<number, string>;
};

export type ThumbnailParamsT = {
  size: 'LARGE';
  mimeType: 'PNG';
};

export class GoogleSlides {
  constructor() {
    // TODO: check if script is ready
  }

  getAllSlideIds(includeTrash: boolean = false): Promise<Id[]> {
    const _includeTrash = includeTrash ? 'true' : 'false';
    return gapi.client.request({
      path: 'drive/v3/files',
      params: {
        q: `mimeType = 'application/vnd.google-apps.presentation' and trashed = ${_includeTrash}`,
        fields: 'files/id'
      }
    })
    // tslint:disable-next-line:no-any
    .then(response => response.result.files.map((file: any) => file.id));
  }

  getSummaryById(id: string): Promise<PresentationSummaryT> {
    return gapi.client.request({
      path: `https://slides.googleapis.com/v1/presentations/${id}`
    })
    .then(response => {
      const pageMapId = new Map<number, string>();
      pageMapId.set(1, response.result.slides[0].objectId);
      return { pageMapId };
    });
  }

  getThumbnailURL(presentationId: string, pageId: string, thumbnailParams: ThumbnailParamsT = { size: 'LARGE', mimeType: 'PNG' }): Promise<string> {
    const { size, mimeType } = thumbnailParams;
    return gapi.client.request({
      path: `https://slides.googleapis.com/v1/presentations/${presentationId}/pages/${pageId}/thumbnail`
      + `?thumbnailProperties.thumbnailSize=${size}`
      + `&thumbnailProperties.mimeType=${mimeType}`
    })
    .then(response => response.result.contentUrl);
  }
}