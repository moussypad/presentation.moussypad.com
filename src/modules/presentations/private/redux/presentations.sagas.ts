import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, actionCreators } from './presentations.actions';
import { PresentationT } from './models';
import { GoogleSlides } from '../../../../services/google/googleSlides';

const googleSlides = new GoogleSlides();

async function getAllPresentations(): Promise<PresentationT[]> {
  const slideIds = await googleSlides.getAllSlideIds();
  const thumbnailURLs = await Promise.all(
    slideIds.map(async id => {
      const summary = await googleSlides.getSummaryById(id);
      const firstPageId = summary.pageMapId.get(1)!;
      return await googleSlides.getThumbnailURL(id, firstPageId);
    }));

  return slideIds.map((id, i) => {
    return {
      id,
      provider: 'Google',
      thumbnailURL: thumbnailURLs[i]
    } as PresentationT;
  });
}

function* requestFetchPresentations(): SagaIterator {
  try {
    const presentations: PresentationT[] = yield call(getAllPresentations);
    yield put(actionCreators.fetchPresentationsSucceed(presentations));    
  } catch (error) {
    yield put(actionCreators.fetchPresentationsFailure(error));
  }
}

export function* watchLoadPresentations() {
  yield takeLatest(ActionTypes.REQUEST_FETCH_PRESENTATIONS, requestFetchPresentations);
}