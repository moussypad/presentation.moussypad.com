/**
 * Type definitions for "material-ui" v1.0.0-beta.2
 * Project: https://github.com/callemall/material-ui/
 * TypeScript Version: 2.4
 */

///<reference types="react" />
///<reference types="enzyme" />

declare namespace MaterialUI {
  /**
   * Component exposed by `material-ui` are usually wrapped
   * with the `withStyles` HOC and allow customization via
   * the following props:
   *
   * - `className`
   * - `classes`
   * - `style`
   */
  interface MaterialComponentProps<StyleClasses> {
    className?: string;
    classes?: StyleClasses;
    style?: Partial<React.CSSProperties>;
  }
  class Component<P, C = Object> extends React.Component<
    P & MaterialComponentProps<C>
  > {}

  interface InputEventEmitter<T> {
    onBlur: React.ReactEventHandler<T>;
    onChange: React.ReactEventHandler<T>;
    onClean: React.ReactEventHandler<T>;
    onDirty: React.ReactEventHandler<T>;
    onFocus: React.ReactEventHandler<T>;
    onKeyDown: React.ReactEventHandler<T>;
    onKeyUp: React.ReactEventHandler<T>;
  }

  /**
   * Utilies types based on:
   * https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
   */
  type Diff<T extends string, U extends string> = ({ [P in T]: P } &
    { [P in U]: never } & { [x: string]: never })[T];
  type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };
}

declare namespace MaterialUI.PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'accent' | 'default';
  type Margin = 'none' | 'dense' | 'normal';
}

declare module 'material-ui' {
  export { default as AppBar } from 'material-ui/AppBar';
  export { default as Avatar } from 'material-ui/Avatar';
  export { default as Badge } from 'material-ui/Badge';

  export {
    default as BottomNavigation,
    BottomNavigationButton,
  } from 'material-ui/BottomNavigation';

  export { default as Button } from 'material-ui/Button';

  export {
    default as Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
  } from 'material-ui/Card';

  export { default as Checkbox } from 'material-ui/Checkbox';
  export { default as Chip } from 'material-ui/Chip';

  export {
    default as Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';

  export { default as Divider } from 'material-ui/Divider';
  export { default as Drawer } from 'material-ui/Drawer';

  export {
    FormControl,
    FormGroup,
    FormLabel,
    FormHelperText,
    FormControlLabel,
  } from 'material-ui/Form';

  export { default as Hidden } from 'material-ui/Hidden';
  export { default as Icon } from 'material-ui/Icon';
  export { default as IconButton } from 'material-ui/IconButton';

  export { default as Input, InputLabel } from 'material-ui/Input';

  export { default as Grid } from 'material-ui/Grid';

  export {
    default as List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
  } from 'material-ui/List';

  export { default as Menu, MenuItem, MenuList } from 'material-ui/Menu';

  export { default as Paper } from 'material-ui/Paper';

  export { CircularProgress, LinearProgress } from 'material-ui/Progress';

  export { default as Radio, RadioGroup } from 'material-ui/Radio';

  export { default as Snackbar, SnackbarContent } from 'material-ui/Snackbar';

  export { MuiThemeProvider } from 'material-ui/styles';

  import * as colors from 'material-ui/colors';
  export { colors };

  export { default as SvgIcon } from 'material-ui/SvgIcon';

  export { default as Switch } from 'material-ui/Switch';

  export {
    default as Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
  } from 'material-ui/Table';

  export { default as Tabs, Tab } from 'material-ui/Tabs';

  export { default as Typography } from 'material-ui/Typography';

  export { default as TextField } from 'material-ui/TextField';

  export { default as Toolbar } from 'material-ui/Toolbar';
}

/* ============================================= */
/*                                               */
/*                   COMPONENTS                  */
/*                                               */
/* ============================================= */

declare module 'material-ui/AppBar' {
  export { default } from 'material-ui/AppBar/AppBar';
  export * from 'material-ui/AppBar/AppBar';
}

declare module 'material-ui/AppBar/AppBar' {
  import { PaperProps } from 'material-ui/Paper/Paper';
  export interface AppBarProps extends PaperProps {
    color?: MaterialUI.PropTypes.Color;
    position?: 'static' | 'fixed' | 'absolute';
  }

  export default class AppBar extends MaterialUI.Component<AppBarProps> {}
}

declare module 'material-ui/Avatar' {
  export { default } from 'material-ui/Avatar/Avatar';
  export * from 'material-ui/Avatar/Avatar';
}

declare module 'material-ui/Avatar/Avatar' {
  export interface AvatarProps {
    alt?: string;
    childrenClassName?: string;
    component?: React.ReactNode;
    imgProps?: Object;
    sizes?: string;
    src?: string;
    srcSet?: string;
  }

  export default class Avatar extends MaterialUI.Component<AvatarProps> {}
}

declare module 'material-ui/Badge' {
  export { default } from 'material-ui/Badge/Badge';
  export * from 'material-ui/Badge/Badge';
}

declare module 'material-ui/Badge/Badge' {
  export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    badgeContent: React.ReactNode;
    children: React.ReactNode;
    color?: 'default' | 'primary' | 'accent';
  }

  export default class Badge extends MaterialUI.Component<BadgeProps> {}
}

declare module 'material-ui/BottomNavigation' {
  export { default } from 'material-ui/BottomNavigation/BottomNavigation';
  export * from 'material-ui/BottomNavigation/BottomNavigation';
  export {
    default as BottomNavigationButton,
  } from 'material-ui/BottomNavigation/BottomNavigationButton';
  export * from 'material-ui/BottomNavigation/BottomNavigationButton';
}

declare module 'material-ui/BottomNavigation/BottomNavigation' {
  export interface BottomNavigationProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onChange?: React.ReactEventHandler<any>;
    showLabels?: boolean;
    value?: any;
  }

  export default class BottomNavigation extends MaterialUI.Component<
    BottomNavigationProps
  > {}
}

declare module 'material-ui/BottomNavigation/BottomNavigationButton' {
  import { ButtonBaseProps } from 'material-ui/internal/ButtonBase';

  export interface BottomNavigationButtonProps extends ButtonBaseProps {
    icon?: React.ReactNode;
    label?: React.ReactNode;
    onChange?: (event: React.ChangeEvent<{}>, value: number) => void;
    onClick?: React.ReactEventHandler<any>;
    selected?: boolean;
    showLabel?: boolean;
    value?: number;
  }

  export default class BottomNavigationButton extends MaterialUI.Component<
    BottomNavigationButtonProps
  > {}
}

declare module 'material-ui/Button' {
  export { default } from 'material-ui/Button/Button';
  export * from 'material-ui/Button/Button';
}

declare module 'material-ui/Button/Button' {
  import { ButtonBaseProps } from 'material-ui/internal/ButtonBase';

  export interface ButtonProps extends ButtonBaseProps {
    color?: MaterialUI.PropTypes.Color | 'contrast';
    component?: React.ReactNode;
    dense?: boolean;
    disabled?: boolean;
    disableFocusRipple?: boolean;
    disableRipple?: boolean;
    fab?: boolean;
    href?: string;
    raised?: boolean;
    type?: string;
  }

  export default class Button extends MaterialUI.Component<ButtonProps> {}
}

declare module 'material-ui/Card' {
  export { default } from 'material-ui/Card/Card';
  export * from 'material-ui/Card/Card';
  export { default as CardActions } from 'material-ui/Card/CardActions';
  export * from 'material-ui/Card/CardActions';
  export { default as CardContent } from 'material-ui/Card/CardContent';
  export * from 'material-ui/Card/CardContent';
  export { default as CardHeader } from 'material-ui/Card/CardHeader';
  export * from 'material-ui/Card/CardHeader';
  export { default as CardMedia } from 'material-ui/Card/CardMedia';
  export * from 'material-ui/Card/CardMedia';
}

declare module 'material-ui/Card/Card' {
  import { PaperProps } from 'material-ui/Paper/Paper';

  export interface CardProps extends PaperProps {
    raised?: boolean;
  }

  export default class Card extends MaterialUI.Component<CardProps> {}
}

declare module 'material-ui/Card/CardActions' {
  export interface CardActionsProps
    extends React.HTMLAttributes<HTMLDivElement> {
    disableActionSpacing?: boolean;
  }

  export default class CardActions extends MaterialUI.Component<
    CardActionsProps
  > {}
}

declare module 'material-ui/Card/CardContent' {
  export type CardContentProps = {} & React.HTMLAttributes<HTMLDivElement>;

  export default class CardContent extends MaterialUI.Component<
    CardContentProps
  > {}
}

declare module 'material-ui/Card/CardHeader' {
  import { CardContentProps } from 'material-ui/Card/CardContent';

  export type CardHeaderProps = {
    avatar?: React.ReactNode;
    subheader?: React.ReactNode;
    title?: React.ReactNode;
  } & Partial<MaterialUI.Omit<CardContentProps, 'title'>>;

  export default class CardHeader extends MaterialUI.Component<
    CardHeaderProps
  > {}
}

declare module 'material-ui/Card/CardMedia' {
  export interface CardMediaProps
    extends React.HTMLAttributes<HTMLDivElement> {}

  export default class CardMedia extends MaterialUI.Component<CardMediaProps> {}
}

declare module 'material-ui/Checkbox' {
  export { default } from 'material-ui/Checkbox/Checkbox';
  export * from 'material-ui/Checkbox/Checkbox';
}

declare module 'material-ui/Checkbox/Checkbox' {
  import { SwitchBaseProps } from 'material-ui/internal/SwitchBase';

  export interface CheckboxProps extends SwitchBaseProps {}

  export default class Checkbox extends MaterialUI.Component<CheckboxProps> {}
}

declare module 'material-ui/Chip' {
  export { default } from 'material-ui/Chip/Chip';
  export * from 'material-ui/Chip/Chip';
}

declare module 'material-ui/Chip/Chip' {
  export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    avatar?: React.ReactNode;
    label?: React.ReactNode;
    onKeyDown?: React.EventHandler<React.KeyboardEvent<any>>;
    onRequestDelete?: React.EventHandler<any>;
    tabIndex?: number;
  }

  export default class Chip extends MaterialUI.Component<ChipProps> {}
}

declare module 'material-ui/Dialog' {
  export { default } from 'material-ui/Dialog/Dialog';
  export * from 'material-ui/Dialog/Dialog';
  export { default as DialogActions } from 'material-ui/Dialog/DialogActions';
  export * from 'material-ui/Dialog/DialogActions';
  export { default as DialogTitle } from 'material-ui/Dialog/DialogTitle';
  export * from 'material-ui/Dialog/DialogTitle';
  export { default as DialogContent } from 'material-ui/Dialog/DialogContent';
  export * from 'material-ui/Dialog/DialogContent';
  export {
    default as DialogContentText,
  } from 'material-ui/Dialog/DialogContentText';
  export * from 'material-ui/Dialog/DialogContentText';
  export {
    default as withResponsiveFullScreen,
  } from 'material-ui/Dialog/withResponsiveFullScreen';
  export * from 'material-ui/Dialog/withResponsiveFullScreen';
}

declare module 'material-ui/Dialog/Dialog' {
  import { ModalProps } from 'material-ui/internal/Modal';

  export type DialogProps = {
    fullScreen?: boolean;
    ignoreBackdropClick?: boolean;
    ignoreEscapeKeyUp?: boolean;
    enterTransitionDuration?: number | string;
    leaveTransitionDuration?: number | string;
    maxWidth?: 'xs' | 'sm' | 'md';
    onBackdropClick?: Function;
    onEscapeKeyUp?: Function;
    onRequestClose?: React.EventHandler<any>;
    open?: boolean;
    transition?: Function | React.ReactElement<any>;
  } & ModalProps;

  export default class Dialog extends MaterialUI.Component<DialogProps> {}
}

declare module 'material-ui/Dialog/DialogActions' {
  export interface DialogActionsProps
    extends React.HTMLAttributes<HTMLDivElement> {}

  export default class DialogActions extends MaterialUI.Component<
    DialogActionsProps
  > {}
}

declare module 'material-ui/Dialog/DialogContent' {
  export interface DialogContentProps
    extends React.HTMLAttributes<HTMLDivElement> {}

  export default class DialogContent extends MaterialUI.Component<
    DialogContentProps
  > {}
}

declare module 'material-ui/Dialog/DialogContentText' {
  export interface DialogContentTextProps
    extends React.HTMLAttributes<HTMLParagraphElement> {}

  export default class DialogContentText extends MaterialUI.Component<
    DialogContentTextProps
  > {}
}

declare module 'material-ui/Dialog/DialogTitle' {
  export interface DialogTitleProps
    extends React.HTMLAttributes<HTMLDivElement> {
    disableTypography?: boolean;
  }

  export default class DialogTitle extends MaterialUI.Component<
    DialogTitleProps
  > {}
}

declare module 'material-ui/Dialog/withResponsiveFullScreen' {
  import { Breakpoint } from 'material-ui/styles/breakpoints';
  import { WithWidthEnhancement } from 'material-ui/utils/withWidth';

  export interface WithResponsiveFullScreenOptions {
    breakpoint: Breakpoint;
  }

  export default function withResponsiveFullScreen<P>(
    options: WithResponsiveFullScreenOptions
  ): React.ComponentClass<P & WithWidthEnhancement>;
}

declare module 'material-ui/Divider' {
  export { default } from 'material-ui/Divider/Divider';
  export * from 'material-ui/Divider/Divider';
}

declare module 'material-ui/Divider/Divider' {
  export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    absolute?: boolean;
    inset?: boolean;
    light?: boolean;
  }

  export default class Divider extends MaterialUI.Component<DividerProps> {}
}

declare module 'material-ui/Drawer' {
  export { default } from 'material-ui/Drawer/Drawer';
  export * from 'material-ui/Drawer/Drawer';
}

declare module 'material-ui/Drawer/Drawer' {
  import { ModalProps } from 'material-ui/internal/Modal';
  import { SlideProps } from 'material-ui/transitions/Slide';
  import { Theme } from 'material-ui/styles/theme';

  export interface DrawerProps extends ModalProps {
    anchor?: 'left' | 'top' | 'right' | 'bottom';
    docked?: boolean;
    elevation?: number;
    enterTransitionDuration?: number;
    leaveTransitionDuration?: number;
    open?: boolean;
    SlideProps?: SlideProps;
    theme?: Theme;
  }

  export default class Drawer extends MaterialUI.Component<DrawerProps> {}
}

declare module 'material-ui/Form' {
  export { default as FormGroup } from 'material-ui/Form/FormGroup';
  export * from 'material-ui/Form/FormGroup';
  export { default as FormLabel } from 'material-ui/Form/FormLabel';
  export * from 'material-ui/Form/FormLabel';
  export { default as FormControl } from 'material-ui/Form/FormControl';
  export * from 'material-ui/Form/FormControl';
  export { default as FormHelperText } from 'material-ui/Form/FormHelperText';
  export * from 'material-ui/Form/FormHelperText';
  export {
    default as FormControlLabel,
  } from 'material-ui/Form/FormControlLabel';
  export * from 'material-ui/Form/FormControlLabel';
}

declare module 'material-ui/Form/FormControl' {
  export interface FormControlProps
    extends React.HtmlHTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    margin?: MaterialUI.PropTypes.Margin;
    onBlur?: React.EventHandler<any>;
    onFocus?: React.EventHandler<any>;
    required?: boolean;
  }

  export default class FormControl extends MaterialUI.Component<
    FormControlProps
  > {}
}

declare module 'material-ui/Form/FormControlLabel' {
  export type FormControlLabelProps = {
    checked?: boolean | string;
    control: React.ReactElement<any>;
    disabled?: boolean;
    inputRef?: React.Ref<any>;
    label: React.ReactNode;
    name?: string;
    onChange?: (event: React.ChangeEvent<{}>, checked: boolean) => void;
    value?: string;
  } & React.LabelHTMLAttributes<HTMLLabelElement>;

  export default class FormControlLabel extends MaterialUI.Component<
    FormControlLabelProps
  > {}
}

declare module 'material-ui/Form/FormGroup' {
  export interface FormGroupProps
    extends React.HtmlHTMLAttributes<HTMLDivElement> {
    row?: boolean;
  }

  export default class FormGroup extends MaterialUI.Component<FormGroupProps> {}
}

declare module 'material-ui/Form/FormHelperText' {
  export interface FormHelperTextProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    disabled?: boolean;
    error?: boolean;
    margin?: 'dense';
  }

  export default class FormHelperText extends MaterialUI.Component<
    FormHelperTextProps
  > {}
}

declare module 'material-ui/Form/FormLabel' {
  export interface FormLabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    disabled?: boolean;
    error?: boolean;
    focused?: boolean;
    required?: boolean;
  }

  export default class FormLabel extends MaterialUI.Component<FormLabelProps> {}
}

declare module 'material-ui/Grid' {
  export { default } from 'material-ui/Grid/Grid';
  export * from 'material-ui/Grid/Grid';
}

declare module 'material-ui/Grid/Grid' {
  import { HiddenProps } from 'material-ui/Hidden/Hidden';
  import { Breakpoint } from 'material-ui/styles/breakpoints';

  export type GridAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch';

  export type GridDirection =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse';

  export type GridSpacing = 0 | 8 | 16 | 24 | 40;

  export type GridJustification =
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';

  export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

  export type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  export type GridProps = {
    component?: React.ReactNode;
    container?: boolean;
    item?: boolean;
    align?: GridAlignment;
    direction?: GridDirection;
    spacing?: GridSpacing;
    hidden?: HiddenProps;
    justify?: GridJustification;
    wrap?: GridWrap;
  } & Partial<{ [key in Breakpoint]: boolean | GridSize }>;

  export default class Grid extends MaterialUI.Component<GridProps> {}
}

declare module 'material-ui/GridList' {
  export { default } from 'material-ui/GridList/GridList';
  export * from 'material-ui/GridList/GridList';
  export { default as GridList } from 'material-ui/GridList/GridList';
  export { default as GridListTitle } from 'material-ui/GridList/GridListTitle';
  export * from 'material-ui/GridList/GridListTitle';
  export {
    default as GridListTitleBar,
  } from 'material-ui/GridList/GridListTitleBar';
  export * from 'material-ui/GridList/GridListTitleBar';
}

declare module 'material-ui/GridList/GridList' {
  export interface GridListProps {
    cellHeight?: number | 'auto';
    cols?: number;
    component?: React.ReactElement<any> | string;
    spacing?: number;
  }

  export default class GridList extends MaterialUI.Component<GridListProps> {}
}

declare module 'material-ui/GridList/GridListTitle' {
  export interface GridListTitleProps {
    cols?: number;
    component?: React.ReactElement<any> | string;
    row?: number;
  }

  export default class GridListTitle extends MaterialUI.Component<
    GridListTitleProps
  > {}
}

declare module 'material-ui/GridList/GridListTitleBar' {
  export interface GridListTitleBarProps {
    actionIcon?: React.ReactElement<any>;
    actionPosition?: 'left' | 'right';
    subtitle?: React.ReactNode;
    title?: React.ReactNode;
    titlePosition?: 'top' | 'bottom';
  }

  export default class GridListTitleBar extends MaterialUI.Component<
    GridListTitleBarProps
  > {}
}

declare module 'material-ui/Hidden' {
  export { default } from 'material-ui/Hidden/Hidden';
  export * from 'material-ui/Hidden/Hidden';
  export { default as HiddenJs } from 'material-ui/Hidden/HiddenJs';
  export * from 'material-ui/Hidden/HiddenJs';
}

declare module 'material-ui/Hidden/Hidden' {
  import { Breakpoint } from 'material-ui/styles/breakpoints';

  export interface HiddenProps {
    only?: Breakpoint | Array<Breakpoint>;
    xsUp?: boolean;
    smUp?: boolean;
    mdUp?: boolean;
    lgUp?: boolean;
    xlUp?: boolean;
    xsDown?: boolean;
    smDown?: boolean;
    mdDown?: boolean;
    lgDown?: boolean;
    xlDown?: boolean;
    implementation?: 'js' | 'css';
  }

  export default class Hidden extends MaterialUI.Component<HiddenProps> {}
}

declare module 'material-ui/Hidden/HiddenJs' {
  import { Breakpoint } from 'material-ui/styles/breakpoints';

  export interface HiddenJsProps {
    only?: Breakpoint | Array<Breakpoint>;
    xsUp?: boolean;
    smUp?: boolean;
    mdUp?: boolean;
    lgUp?: boolean;
    xlUp?: boolean;
    xsDown?: boolean;
    smDown?: boolean;
    mdDown?: boolean;
    lgDown?: boolean;
    xlDown?: boolean;
  }

  export default class HiddenJs extends MaterialUI.Component<HiddenJsProps> {}
}

declare module 'material-ui/Icon' {
  export { default } from 'material-ui/Icon/Icon';
  export * from 'material-ui/Icon/Icon';
}

declare module 'material-ui/Icon/Icon' {
  export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?:
      | 'inherit'
      | 'accent'
      | 'action'
      | 'contrast'
      | 'disabled'
      | 'error'
      | 'primary';
  }

  export default class Icon extends MaterialUI.Component<IconProps> {}
}

declare module 'material-ui/IconButton' {
  export { default } from 'material-ui/IconButton/IconButton';
  export * from 'material-ui/IconButton/IconButton';
}

declare module 'material-ui/IconButton/IconButton' {
  import { ButtonBaseProps } from 'material-ui/internal/ButtonBase';

  export interface IconButtonProps extends ButtonBaseProps {
    color?: MaterialUI.PropTypes.Color | 'contrast';
    disabled?: boolean;
    disableRipple?: boolean;
    rootRef?: React.Ref<any>;
  }

  export default class IconButton extends MaterialUI.Component<
    IconButtonProps
  > {}
}

declare module 'material-ui/Input' {
  export { default } from 'material-ui/Input/Input';
  export * from 'material-ui/Input/Input';
  export { default as InputLabel } from 'material-ui/Input/InputLabel';
  export * from 'material-ui/Input/InputLabel';
  // NOTE: Textarea is missing from exports (intentional?)
}

declare module 'material-ui/Input/Input' {
  export type InputProps = {
    autoComplete?: string;
    autoFocus?: boolean;
    component?: React.ReactNode;
    defaultValue?: string | number;
    disabled?: boolean;
    disableUnderline?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    id?: string;
    /**
     * TODO: Can we be more restrictive? E.g. it's only an <input>
     * if [component] is not set.
     */
    inputProps?:
      | React.TextareaHTMLAttributes<HTMLTextAreaElement>
      | React.InputHTMLAttributes<HTMLInputElement>;
    inputRef?: React.Ref<any>;
    margin?: 'dense';
    multiline?: boolean;
    name?: string;
    placeholder?: string;
    rows?: string | number;
    rowsMax?: string | number;
    type?: string;
    value?: string | number;
  } & React.HTMLAttributes<HTMLDivElement> &
    Partial<MaterialUI.InputEventEmitter<HTMLElement>>;

  export default class Input extends MaterialUI.Component<InputProps> {}
}

declare module 'material-ui/Input/InputLabel' {
  import { FormLabelProps } from 'material-ui/Form/FormLabel';

  export interface InputLabelProps extends FormLabelProps {
    disableAnimation?: boolean;
    disabled?: boolean;
    error?: boolean;
    focused?: boolean;
    required?: boolean;
    shrink?: boolean;
  }

  export default class InputLabel extends MaterialUI.Component<
    InputLabelProps
  > {}
}

declare module 'material-ui/Input/Textarea' {
  export type TextareaProps = {
    defaultValue?: any;
    disabled?: boolean;
    onChange?: React.EventHandler<React.ChangeEvent<{}>>;
    rows?: string | number;
    rowsMax?: string | number;
    textareaRef?: React.Ref<any>;
    value?: string;
  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

  export default class Textarea extends MaterialUI.Component<TextareaProps> {}
}

declare module 'material-ui/List' {
  export { default } from 'material-ui/List/List';
  export * from 'material-ui/List/List';
  export { default as ListItem } from 'material-ui/List/ListItem';
  export * from 'material-ui/List/ListItem';
  export { default as ListItemAvatar } from 'material-ui/List/ListItemAvatar';
  export * from 'material-ui/List/ListItemAvatar';
  export { default as ListItemText } from 'material-ui/List/ListItemText';
  export * from 'material-ui/List/ListItemText';
  export { default as ListItemIcon } from 'material-ui/List/ListItemIcon';
  export * from 'material-ui/List/ListItemIcon';
  export {
    default as ListItemSecondaryAction,
  } from 'material-ui/List/ListItemSecondaryAction';
  export * from 'material-ui/List/ListItemSecondaryAction';
  export { default as ListSubheader } from 'material-ui/List/ListSubheader';
  export * from 'material-ui/List/ListSubheader';
}

declare module 'material-ui/List/List' {
  export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    component?: React.ReactNode;
    dense?: boolean;
    disablePadding?: boolean;
    rootRef?: React.Ref<any>;
    subheader?: React.ReactElement<any>;
  }

  export default class List extends MaterialUI.Component<ListProps> {}
}

declare module 'material-ui/List/ListItem' {
  import { ButtonBaseProps } from 'material-ui/internal/ButtonBase';

  export type ListItemProps = {
    button?: boolean;
    component?: React.ReactNode;
    dense?: boolean;
    disabled?: boolean;
    disableGutters?: boolean;
    divider?: boolean;
  } & ButtonBaseProps &
    React.LiHTMLAttributes<HTMLLIElement>;

  export default class ListItem extends MaterialUI.Component<ListItemProps> {}
}

declare module 'material-ui/List/ListItemAvatar' {
  export interface ListItemAvatarProps {}

  export default class ListItemAvatar extends MaterialUI.Component<
    ListItemAvatarProps
  > {}
}

declare module 'material-ui/List/ListItemIcon' {
  export interface ListItemIconProps {}

  export default class ListItemIcon extends MaterialUI.Component<
    ListItemIconProps
  > {}
}

declare module 'material-ui/List/ListItemSecondaryAction' {
  export interface ListItemSecondaryActionProps {}

  export default class ListItemSecondaryAction extends MaterialUI.Component<
    ListItemSecondaryActionProps
  > {}
}

declare module 'material-ui/List/ListItemText' {
  export interface ListItemTextProps
    extends React.HTMLAttributes<HTMLDivElement> {
    disableTypography?: boolean;
    inset?: boolean;
    primary?: React.ReactNode;
    secondary?: React.ReactNode;
  }

  export default class ListItemText extends MaterialUI.Component<
    ListItemTextProps
  > {}
}

declare module 'material-ui/List/ListSubheader' {
  export interface ListSubheaderProps
    extends React.HTMLAttributes<HTMLDivElement> {
    color?: 'default' | 'primary' | 'inherit';
    inset?: boolean;
  }

  export default class ListSubheader extends MaterialUI.Component<
    ListSubheaderProps
  > {}
}

declare module 'material-ui/Menu' {
  export { default } from 'material-ui/Menu/Menu';
  export * from 'material-ui/Menu/Menu';
  export { default as MenuList } from 'material-ui/Menu/MenuList';
  export * from 'material-ui/Menu/MenuList';
  export { default as MenuItem } from 'material-ui/Menu/MenuItem';
  export * from 'material-ui/Menu/MenuItem';
}

declare module 'material-ui/Menu/Menu' {
  import { TransitionHandlers } from 'material-ui/internal/Transition';
  import { MenuListProps } from 'material-ui/Menu/MenuList';
  import { PopoverProps } from 'material-ui/internal/Popover';

  export type MenuProps = {
    anchorEl?: HTMLElement;
    MenuListProps?: MenuListProps;
    onRequestClose?: React.EventHandler<any>;
    open?: boolean;
    transitionDuration?: number | 'auto';
  } & Partial<TransitionHandlers> &
    PopoverProps;

  export default class Menu extends MaterialUI.Component<MenuProps> {}
}

declare module 'material-ui/Menu/MenuItem' {
  import { ListItemProps } from 'material-ui/List/ListItem';

  export interface MenuItemProps extends ListItemProps {
    component?: React.ReactNode;
    role?: string;
    selected?: boolean;
  }

  export default class MenuItem extends MaterialUI.Component<MenuItemProps> {}
}

declare module 'material-ui/Menu/MenuList' {
  import { ListProps } from 'material-ui/List/List';

  export type MenuListProps = {
    onKeyDown?: React.ReactEventHandler<React.KeyboardEvent<any>>;
  } & ListProps;

  export default class MenuList extends MaterialUI.Component<MenuListProps> {}
}

declare module 'material-ui/MobileStepper' {
  export { default } from 'material-ui/MobileStepper/MobileStepper';
  export * from 'material-ui/MobileStepper/MobileStepper';
}

declare module 'material-ui/MobileStepper/MobileStepper' {
  import { PaperProps } from 'material-ui/Paper/Paper';

  export interface MobileStepperProps extends PaperProps {
    activeStep?: number;
    backButtonText?: React.ReactNode;
    disableBack?: boolean;
    disableNext?: boolean;
    nextButtonText?: React.ReactNode;
    onBack: React.EventHandler<any>;
    onNext: React.EventHandler<any>;
    position?: 'bottom' | 'top' | 'static';
    steps: number;
    type?: 'text' | 'dots' | 'progress';
  }

  export default class MobileStepper extends MaterialUI.Component<
    MobileStepperProps
  > {}
}

declare module 'material-ui/Paper' {
  export { default } from 'material-ui/Paper/Paper';
  export * from 'material-ui/Paper/Paper';
}

declare module 'material-ui/Paper/Paper' {
  export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
    component?: React.ReactNode;
    elevation?: number;
    square?: boolean;
  }

  export default class Paper extends MaterialUI.Component<PaperProps> {}
}

declare module 'material-ui/Progress' {
  export {
    default as CircularProgress,
  } from 'material-ui/Progress/CircularProgress';
  export * from 'material-ui/Progress/CircularProgress';
  export {
    default as LinearProgress,
  } from 'material-ui/Progress/LinearProgress';
  export * from 'material-ui/Progress/LinearProgress';
}

declare module 'material-ui/Progress/CircularProgress' {
  export interface CircularProgressProps
    extends React.HTMLAttributes<HTMLDivElement> {
    color?: 'primary' | 'accent';
    max?: number;
    min?: number;
    mode?: 'determinate' | 'indeterminate';
    size?: number;
    value?: number;
  }

  export default class CircularProgress extends MaterialUI.Component<
    CircularProgressProps
  > {}
}

declare module 'material-ui/Progress/LinearProgress' {
  export interface LinearProgressProps
    extends React.HTMLAttributes<HTMLDivElement> {
    color?: 'primary' | 'accent';
    mode?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
    value?: number;
    valueBuffer?: number;
  }

  export default class LinearProgress extends MaterialUI.Component<
    LinearProgressProps
  > {}
}

declare module 'material-ui/Radio' {
  export { default } from 'material-ui/Radio/Radio';
  export * from 'material-ui/Radio/Radio';
  export { default as RadioGroup } from 'material-ui/Radio/RadioGroup';
  export * from 'material-ui/Radio/RadioGroup';
}

declare module 'material-ui/Radio/Radio' {
  import { SwitchBaseProps } from 'material-ui/internal/SwitchBase';

  export interface RadioProps extends SwitchBaseProps {
    checked?: boolean | string;
    checkedClassName?: string;
    checkedIcon?: React.ReactNode;
    defaultChecked?: boolean;
    disabled?: boolean;
    disabledClassName?: string;
    disableRipple?: boolean;
    icon?: React.ReactNode;
    inputProps?: Object;
    inputRef?: React.Ref<any>;
    name?: string;
    onChange?: (event: React.ChangeEvent<{}>, checked: boolean) => void;
    tabIndex?: string;
    value?: string;
  }

  export default class Radio extends MaterialUI.Component<RadioProps> {}
}

declare module 'material-ui/Radio/RadioGroup' {
  import { FormGroupProps } from 'material-ui/Form/FormGroup';

  export type RadioGroupProps = {
    name?: string;
    onChange?: (event: React.ChangeEvent<{}>, value: string) => void;
    value: string;
  } & Partial<MaterialUI.Omit<FormGroupProps, 'onChange'>>;

  export default class RadioGroup extends MaterialUI.Component<
    RadioGroupProps
  > {}
}

declare module 'material-ui/Snackbar' {
  export { default } from 'material-ui/Snackbar/Snackbar';
  export * from 'material-ui/Snackbar/Snackbar';
  export {
    default as SnackbarContent,
  } from 'material-ui/Snackbar/SnackbarContent';
  export * from 'material-ui/Snackbar/SnackbarContent';
}

declare module 'material-ui/Snackbar/Snackbar' {
  import { TransitionHandlers } from 'material-ui/internal/Transition';
  export type Origin = {
    horizontal?: 'left' | 'center' | 'right' | number;
    vertical?: 'top' | 'center' | 'bottom' | number;
  };

  export type SnackbarProps = {
    action?: React.ReactElement<any> | React.ReactElement<any>[];
    anchorOrigin?: Origin;
    autoHideDuration?: number;
    enterTransitionDuration?: number;
    key?: number;
    leaveTransitionDuration?: number;
    message?: React.ReactElement<any>;
    onMouseEnter?: React.MouseEventHandler<any>;
    onMouseLeave?: React.MouseEventHandler<any>;
    onRequestClose?: (event: React.SyntheticEvent<any>, reason: string) => void;
    open: boolean;
    SnackbarContentProps?: Object;
    transition?: React.ReactNode;
  } & Partial<TransitionHandlers> &
    React.HTMLAttributes<HTMLDivElement>;

  export default class Snackbar extends MaterialUI.Component<SnackbarProps> {}
}

declare module 'material-ui/Snackbar/SnackbarContent' {
  import { PaperProps } from 'material-ui/Paper/Paper';

  export interface SnackbarContentProps extends PaperProps {
    action?: React.ReactElement<any>;
    message: React.ReactElement<any> | string;
  }

  export default class SnackbarContent extends MaterialUI.Component<
    SnackbarContentProps
  > {}
}

declare module 'material-ui/SvgIcon' {
  export { default } from 'material-ui/SvgIcon/SvgIcon';
  export * from 'material-ui/SvgIcon/SvgIcon';
}

declare module 'material-ui/SvgIcon/SvgIcon' {
  export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    titleAccess?: string;
    viewBox?: string;
  }

  export default class SvgIcon extends MaterialUI.Component<SvgIconProps> {}
}

declare module 'material-ui/Switch' {
  export { default } from 'material-ui/Switch/Switch';
  export * from 'material-ui/Switch/Switch';
}

declare module 'material-ui/Switch/Switch' {
  import { SwitchBaseProps } from 'material-ui/internal/SwitchBase';

  export interface SwitchProps extends SwitchBaseProps {
    checked?: boolean | string;
    checkedClassName?: string;
    checkedIcon?: React.ReactNode;
    defaultChecked?: boolean;
    disabled?: boolean;
    disabledClassName?: string;
    disableRipple?: boolean;
    icon?: React.ReactNode;
    inputProps?: object;
    name?: string;
    onChange?: (event: React.ChangeEvent<{}>, checked: boolean) => void;
    tabIndex?: string;
    value?: string;
  }

  export default class Switch extends MaterialUI.Component<SwitchProps> {}
}

declare module 'material-ui/Table' {
  export { default } from 'material-ui/Table/Table';
  export * from 'material-ui/Table/Table';
  export { default as TableHead } from 'material-ui/Table/TableHead';
  export * from 'material-ui/Table/TableHead';
  export { default as TableBody } from 'material-ui/Table/TableBody';
  export * from 'material-ui/Table/TableBody';
  export { default as TableRow } from 'material-ui/Table/TableRow';
  export * from 'material-ui/Table/TableRow';
  export { default as TableCell } from 'material-ui/Table/TableCell';
  export * from 'material-ui/Table/TableCell';
  export { default as TableSortLabel } from 'material-ui/Table/TableSortLabel';
  export * from 'material-ui/Table/TableSortLabel';
}

declare module 'material-ui/Table/Table' {
  export interface TableProps
    extends React.TableHTMLAttributes<HTMLTableElement> {}

  export default class Table extends MaterialUI.Component<TableProps> {}
}

declare module 'material-ui/Table/TableBody' {
  export interface TableBodyProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {}

  export default class TableBody extends MaterialUI.Component<TableBodyProps> {}
}

declare module 'material-ui/Table/TableCell' {
  /**
   * `<TableCell>` will be rendered as an `<th>`or `<td>` depending
   * on the context it is used in. Where context literally is the
   * React `context`.
   *
   * Since it is not decided via prop, we have create loose typings
   * here.
   */
  export type TableCellProps = {
    checkbox?: boolean;
    compact?: boolean;
    disablePadding?: boolean;
    numeric?: boolean;
  } & React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
    React.TdHTMLAttributes<HTMLTableDataCellElement>;

  export default class TableCell extends MaterialUI.Component<TableCellProps> {}
}

declare module 'material-ui/Table/TableHead' {
  export interface TableHeadProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {}

  export default class TableHead extends MaterialUI.Component<TableHeadProps> {}
}

declare module 'material-ui/Table/TableRow' {
  export interface TableRowProps
    extends React.HTMLAttributes<HTMLTableRowElement> {
    hover?: boolean;
    selected?: boolean;
  }

  export default class TableRow extends MaterialUI.Component<TableRowProps> {}
}

declare module 'material-ui/Table/TableSortLabel' {
  import { ButtonBaseProps } from 'material-ui/internal/ButtonBase';

  export interface TableSortLabelProps extends ButtonBaseProps {
    active?: boolean;
    direction?: 'asc' | 'desc';
  }

  export default class TableSortLabel extends MaterialUI.Component<
    TableSortLabelProps
  > {}
}

declare module 'material-ui/Tabs' {
  export { default } from 'material-ui/Tabs/Tabs';
  export * from 'material-ui/Tabs/Tabs';
  export { default as Tab } from 'material-ui/Tabs/Tab';
  export * from 'material-ui/Tabs/Tab';
}

declare module 'material-ui/Tabs/Tab' {
  import { ButtonBaseProps } from 'material-ui/internal/ButtonBase';

  export interface TabProps extends ButtonBaseProps {
    disabled?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
    value?: any;
    label?: React.ReactNode;
    onChange?: (
      event: React.ChangeEvent<{ checked: boolean }>,
      value: any
    ) => void;
    onClick?: React.EventHandler<any>;
    selected?: boolean;
    style?: object;
    textColor?: string | 'accent' | 'primary' | 'inherit';
  }

  export default class Tab extends MaterialUI.Component<TabProps> {}
}

declare module 'material-ui/Tabs/TabIndicator' {
  export interface TabIndicatorProps
    extends React.HTMLAttributes<HTMLDivElement> {
    color: 'accent' | 'primary' | string;
    style: { left: number; width: number };
  }

  export default class TabIndicator extends MaterialUI.Component<
    TabIndicatorProps
  > {}
}

declare module 'material-ui/Tabs/TabScrollButton' {
  import { ButtonBaseProps } from 'material-ui/internal/ButtonBase';

  export interface TabScrollButtonProps extends ButtonBaseProps {
    direction?: 'left' | 'right';
    visible?: boolean;
  }

  export default class TabScrollButton extends MaterialUI.Component<
    TabScrollButtonProps
  > {}
}

declare module 'material-ui/Tabs/Tabs' {
  import { ButtonBaseProps } from 'material-ui/internal/ButtonBase';

  export interface TabsProps extends ButtonBaseProps {
    buttonClassName?: string;
    centered?: boolean;
    children?: React.ReactNode;
    fullWidth?: boolean;
    value: any;
    indicatorClassName?: string;
    indicatorColor?: 'accent' | 'primary' | string;
    onChange: (event: React.ChangeEvent<{}>, value: any) => void;
    scrollable?: boolean;
    scrollButtons?: 'auto' | 'on' | 'off';
    textColor?: 'accent' | 'primary' | 'inherit' | string;
    width?: string;
  }

  export default class Tabs extends MaterialUI.Component<TabsProps> {}
}

declare module 'material-ui/TextField' {
  export { default } from 'material-ui/TextField/TextField';
  export * from 'material-ui/TextField/TextField';
}

declare module 'material-ui/TextField/TextField' {
  import { FormControlProps } from 'material-ui/Form/FormControl';
  import { FormHelperTextProps } from 'material-ui/Form/FormHelperText';
  import { InputProps } from 'material-ui/Input/Input';
  import { InputLabelProps } from 'material-ui/Input/InputLabel';

  export type TextFieldProps = {
    autoComplete?: string;
    autoFocus?: boolean;
    defaultValue?: string | number;
    disabled?: boolean;
    error?: boolean;
    FormHelperTextProps?: FormHelperTextProps;
    fullWidth?: boolean;
    helperText?: React.ReactNode;
    helperTextClassName?: string;
    id?: string;
    inputClassName?: string;
    InputClassName?: string;
    InputLabelProps?: InputLabelProps;
    inputProps?: Object;
    InputProps?: InputProps;
    inputRef?: React.Ref<any>;
    label?: React.ReactElement<any> | string;
    labelClassName?: string;
    multiline?: boolean;
    name?: string;
    placeholder?: string;
    required?: boolean;
    rootRef?: React.Ref<any>;
    rows?: string | number;
    rowsMax?: string | number;
    type?: string;
    value?: string | number;
    margin?: MaterialUI.PropTypes.Margin;
  } & Partial<MaterialUI.InputEventEmitter<HTMLInputElement>> &
    FormControlProps;

  export default class Input extends MaterialUI.Component<TextFieldProps> {}
}

declare module 'material-ui/Toolbar' {
  export { default } from 'material-ui/Toolbar/Toolbar';
  export * from 'material-ui/Toolbar/Toolbar';
}

declare module 'material-ui/Toolbar/Toolbar' {
  export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
    disableGutters?: boolean;
  }

  export default class Toolbar extends MaterialUI.Component<ToolbarProps> {}
}

declare module 'material-ui/Typography' {
  export { default } from 'material-ui/Typography/Typography';
  export * from 'material-ui/Typography/Typography';
}

declare module 'material-ui/Typography/Typography' {
  import { Style, TextStyle } from 'material-ui/styles/typography';
  export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    align?: MaterialUI.PropTypes.Alignment;
    component?: React.ReactNode;
    color?: MaterialUI.PropTypes.Color | 'secondary';
    gutterBottom?: boolean;
    headlineMapping?: { [type in TextStyle]: string };
    noWrap?: boolean;
    paragraph?: boolean;
    type?: Style | 'caption' | 'button';
  }

  export default class Typography extends MaterialUI.Component<
    TypographyProps
  > {}
}

/* ============================================= */
/*                                               */
/*                     COLORS                    */
/*                                               */
/* ============================================= */

declare module 'material-ui/colors' {
  export type Contrast = 'light' | 'dark' | 'brown';
  export interface Color {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
    contrastDefaultColor: Contrast;
  }

  export const amber: Color;
  export const blue: Color;
  export const blueGrey: Color;
  export const brown: Color;
  export const cyan: Color;
  export const deepOrange: Color;
  export const deepPurple: Color;
  export const green: Color;
  export const grey: Color;
  export const indigo: Color;
  export const lightBlue: Color;
  export const lightGreen: Color;
  export const lime: Color;
  export const orange: Color;
  export const pink: Color;
  export const purple: Color;
  export const red: Color;
  export const teal: Color;
  export const yellow: Color;

  // From `/common`
  export const black: string;
  export const white: string;

  export const darkBlack: string;
  export const darkWhite: string;
  export const faintBlack: string;
  export const fullBlack: string;
  export const fullWhite: string;
  export const lightBlack: string;
  export const lightWhite: string;
  export const minBlack: string;
  export const transparent: string;
}

/* ============================================= */
/*                                               */
/*                   INTERNAL                    */
/*                                               */
/* ============================================= */

declare module 'material-ui/internal' {
  /**
   * NOTE: There is much more inside this module,
   * but not sure if this should be exposed or not.
   */
}

declare module 'material-ui/internal/Backdrop' {
  export interface BackdropProps {
    invisible?: boolean;
    onClick?: React.ReactEventHandler<{}>;
    [prop: string]: any;
  }

  export default class Backdrop extends MaterialUI.Component<BackdropProps> {}
}

declare module 'material-ui/internal/ButtonBase' {
  export interface ButtonBaseProps {
    centerRipple?: boolean;
    component?: React.ReactNode;
    disabled?: boolean;
    disableRipple?: boolean;
    focusRipple?: boolean;
    keyboardFocusedClassName?: string;
    onBlur?: React.FocusEventHandler<{}>;
    onClick?: React.MouseEventHandler<{}>;
    onFocus?: React.FocusEventHandler<{}>;
    onKeyboardFocus?: React.FocusEventHandler<{}>;
    onKeyDown?: React.KeyboardEventHandler<{}>;
    onKeyUp?: React.KeyboardEventHandler<{}>;
    onMouseDown?: React.MouseEventHandler<{}>;
    onMouseLeave?: React.MouseEventHandler<{}>;
    onMouseUp?: React.MouseEventHandler<{}>;
    onTouchEnd?: React.TouchEventHandler<{}>;
    onTouchStart?: React.TouchEventHandler<{}>;
    role?: string;
    tabIndex?: string;
    type?: string;
  }

  export default class ButtonBase extends MaterialUI.Component<
    ButtonBaseProps
  > {}
}

declare module 'material-ui/internal/Modal' {
  import { BackdropProps } from 'material-ui/internal/Backdrop';
  import { TransitionHandlers } from 'material-ui/internal/Transition';

  export type ModalProps = {
    backdropClassName?: string;
    backdropComponent?: React.ComponentType<BackdropProps>;
    backdropInvisible?: boolean;
    backdropTransitionDuration?: number;
    keepMounted?: boolean;
    disableBackdrop?: boolean;
    ignoreBackdropClick?: boolean;
    ignoreEscapeKeyUp?: boolean;
    modalManager?: Object;
    onBackdropClick?: React.ReactEventHandler<{}>;
    onEscapeKeyUp?: React.ReactEventHandler<{}>;
    onRequestClose?: React.ReactEventHandler<{}>;
    show?: boolean;
  } & Partial<TransitionHandlers> &
    React.HtmlHTMLAttributes<HTMLDivElement>;

  export default class Modal extends MaterialUI.Component<ModalProps> {}
}

declare module 'material-ui/internal/Popover' {
  import { PaperProps } from 'material-ui/Paper/Paper';
  import { TransitionHandlers } from 'material-ui/internal/Transition';

  export type Origin = {
    horizontal: 'left' | 'center' | 'right' | number;
    vertical: 'top' | 'center' | 'bottom' | number;
  };

  export type PopoverProps = {
    anchorEl?: Object;
    anchorOrigin?: Origin;
    elevation?: number;
    enteredClassName?: string;
    enteringClassName?: string;
    exitedClassName?: string;
    exitingClassName?: string;
    getContentAnchorEl?: Function;
    modal?: boolean;
    onRequestClose?: Function;
    open?: boolean;
    role?: string;
    transformOrigin?: Origin;
    transitionDuration?: number | 'auto';
    theme?: Object;
  } & Partial<TransitionHandlers> &
    PaperProps;

  export default class Popover extends MaterialUI.Component<PopoverProps> {}
}

declare module 'material-ui/internal/Portal' {
  export interface PortalProps {
    open?: boolean;
  }

  export default class Portal extends React.Component<PortalProps> {}
}

declare module 'material-ui/internal/SwitchBase' {
  export interface SwitchBaseProps {
    checked?: boolean | string;
    checkedClassName?: string;
    checkedIcon?: React.ReactNode;
    defaultChecked?: boolean;
    disabled?: boolean;
    disabledClassName?: string;
    disableRipple?: boolean;
    icon?: React.ReactNode;
    indeterminate?: boolean;
    indeterminateIcon?: React.ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    inputRef?: React.Ref<any>;
    name?: string;
    onChange?: (event: React.ChangeEvent<{}>, checked: boolean) => void;
    tabIndex?: string;
    value?: string;
  }

  export class SwitchBase extends MaterialUI.Component<SwitchBaseProps> {}

  export interface CreateSwitchBaseOptions {
    defaultIcon?: React.ReactNode;
    defaultCheckedIcon?: React.ReactNode;
    inputType?: string;
  }

  export default function createSwitch(
    options: CreateSwitchBaseOptions
  ): SwitchBase;
}

declare module 'material-ui/internal/Transition' {
  export type TransitionCallback = (element: HTMLElement) => void;
  export type TransitionRequestTimeout = (element: HTMLElement) => number;

  export type TransitionHandlers = {
    onEnter: TransitionCallback;
    onEntering: TransitionCallback;
    onEntered: TransitionCallback;
    onExit: TransitionCallback;
    onExiting: TransitionCallback;
    onExited: TransitionCallback;
  };

  export interface TransitionProps extends Partial<TransitionHandlers> {
    children?: React.ReactElement<any>;
    className?: string;
    enteredClassName?: string;
    enteringClassName?: string;
    exitedClassName?: string;
    exitingClassName?: string;
    in?: boolean;
    onRequestTimeout?: TransitionRequestTimeout;
    timeout?: number;
    transitionAppear?: boolean;
    unmountOnExit?: boolean;
  }

  export default class Transition extends React.Component<TransitionProps> {}
}

/* ============================================= */
/*                                               */
/*                     STYLES                    */
/*                                               */
/* ============================================= */

declare module 'material-ui/styles' {
  export {
    default as MuiThemeProvider,
  } from 'material-ui/styles/MuiThemeProvider';
  export { default as createBreakpoints } from 'material-ui/styles/breakpoints';
  export { default as createMuiTheme } from 'material-ui/styles/theme';
  export { default as createPalette } from 'material-ui/styles/palette';
  export { default as createTypography } from 'material-ui/styles/typography';
  export { default as withStyles } from 'material-ui/styles/withStyles';
  export { default as withTheme } from 'material-ui/styles/withTheme';

  export {
    StyleRules,
    StyleRulesCallback,
  } from 'material-ui/styles/withStyles';
}

declare module 'material-ui/styles/MuiThemeProvider' {
  import { Theme } from 'material-ui/styles/theme';

  export interface MuiThemeProviderProps {
    theme?: Theme<any>;
    sheetsManager?: Object;
    children: React.ReactNode;
  }

  export default class MuiThemeProvider extends React.Component<
    MuiThemeProviderProps
  > {}
}

declare module 'material-ui/styles/breakpoints' {
  export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type BreakpointMap = { [key in Breakpoint]: number };
  export const keys: Breakpoint[];

  export interface BreakpointsOptions {
    breakpoints: BreakpointMap;
    unit: string;
    step: number;
  }

  export interface Breakpoints {
    keys: typeof keys;
    values: number[];
    up: (key: Breakpoint) => string;
    down: (key: Breakpoint) => string;
    between: (start: Breakpoint, end: Breakpoint) => string;
    only: (key: Breakpoint) => string;
    getWidth: (key: Breakpoint) => number;
  }

  function createBreakpoints(
    options?: Partial<BreakpointsOptions>
  ): Breakpoints;

  export default createBreakpoints;
}

declare module 'material-ui/styles/colorManipulator' {
  export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
  export type ColorObject = {
    type: ColorFormat;
    color: [number, number, number] | [number, number, number, number];
  };

  export function convertColorToString(color: ColorObject): string;
  export function convertHexToRGB(hex: string): string;
  export function decomposeColor(color: string): ColorObject;
  export function getContrastRatio(
    foreground: string,
    background: string
  ): number;
  export function getLuminance(color: string): number;
  export function emphasize(color: string, coefficient?: number): string;
  export function fade(color: string, value: number): string;
  export function darken(color: string, coefficient?: number): string;
  export function lighten(color: string, coefficient?: number): string;
}

declare module 'material-ui/styles/createGenerateClassName' {
  /**
   * FIXME: `jss` TS typings are bad and incomplete ...
   *        So the following typigns are not really good.
   */
  export default function createGenerateClassName(): (
    rule: Object,
    stylesheet?: Object
  ) => string;
}

declare module 'material-ui/styles/mixins' {
  import { Spacing } from 'material-ui/styles/spacing';
  import { Breakpoints } from 'material-ui/styles/breakpoints';

  export interface Mixins {
    gutters: (styles: Object) => Object;
  }

  export default function createMixins(
    breakpoints: Breakpoints,
    spacing: Spacing
  ): Mixins;
}

declare module 'material-ui/styles/palette' {
  import { grey, Color, Contrast } from 'material-ui/colors';

  export type Shade = {
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      hint: string;
      icon: string;
      divider: string;
      lightDivider: string;
    };
    input: {
      bottomLine: string;
      helperText: string;
      labelText: string;
      inputText: string;
      disabled: string;
    };
    action: {
      active: string;
      disabled: string;
    };
    background: {
      default: string;
      paper: string;
      appBar: string;
      contentFrame: string;
      status: string;
    };
  };

  export const light: Shade;
  export const dark: Shade;

  type PaletteOptions = {
    primary: Color;
    accent: Color;
    error: Color;
    type: Contrast;
  };

  export type Palette = {
    grey: typeof grey;
    getContrastText: (color: string) => string;
  } & PaletteOptions &
    Shade;

  export default function createPalette(
    options?: Partial<PaletteOptions>
  ): Palette;
}

declare module 'material-ui/styles/shadows' {
  const shadows: [
    'none',
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];

  export type Shadows = typeof shadows;
  export default shadows;
}

declare module 'material-ui/styles/spacing' {
  const spacing: {
    unit: number;
  };

  export type Spacing = typeof spacing;
  export default spacing;
}

declare module 'material-ui/styles/theme' {
  import { Breakpoints } from 'material-ui/styles/breakpoints';
  import { Mixins } from 'material-ui/styles/mixins';
  import { Palette } from 'material-ui/styles/palette';
  import { Shadows } from 'material-ui/styles/shadows';
  import { Spacing } from 'material-ui/styles/spacing';
  import { Transitions } from 'material-ui/styles/transitions';
  import { Typography } from 'material-ui/styles/typography';
  import { ZIndex } from 'material-ui/styles/zIndex';

  export interface ThemeOptions {
    breakpoints: Breakpoints;
    mixins: Mixins;
    palette: Palette;
    typography: Typography;
  }

  export type Theme<T = {}> = {
    direction: 'ltr';
    shadows: Shadows;
    spacing: Spacing;
    transitions: Transitions;
    zIndex: ZIndex;
  } & ThemeOptions &
    T;

  export default function createMuiTheme<T = {}>(
    options?: Partial<ThemeOptions> & T
  ): Theme<T>;
}

declare module 'material-ui/styles/themeListener' {
  // This is using this API: https://github.com/vesparny/brcast
  interface MuiContext {
    getState(): Object;
    subscribe(callback: Function): Function;
  }

  export interface ThemeListener {
    contextTypes: {
      'material-ui': object;
    };
    initial(context: Object): Object;
    subscribe(context: Object, callback: Function): Function;
  }

  const themeListener: ThemeListener;
  export default themeListener;
}

declare module 'material-ui/styles/transitions' {
  export interface Easing {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    sharp: string;
  }
  export const easing: Easing;

  export interface Duration {
    shortest: number;
    shorter: number;
    short: number;
    standard: number;
    complex: number;
    enteringScreen: number;
    leavingScreen: number;
  }
  export const duration: Duration;

  export function formatMs(milliseconds: number): string;

  export interface Transitions {
    easing: Easing;
    duration: Duration;
    create(
      props: string | string[],
      options?: Partial<{ duration: number; easing: string; delay: number }>
    ): string;
    getAutoHeightDuration(height: number): number;
  }
  const transitions: Transitions;
  export default transitions;
}

declare module 'material-ui/styles/typography' {
  import { Palette } from 'material-ui/styles/palette';

  export type TextStyle =
    | 'display1'
    | 'display2'
    | 'display3'
    | 'display4'
    | 'headline'
    | 'title'
    | 'subheading'
    | 'body1'
    | 'body2'
    | 'caption';

  export type Style = TextStyle | 'button';

  export interface FontStyle {
    fontFamily: string;
    fontSize: number | string;
    fontWeightLight: number | string;
    fontWeightRegular: number | string;
    fontWeightMedium: number | string;
  }

  export interface TypographyStyle {
    color: string;
    fontFamily: string;
    fontSize: number | string;
    fontWeight: number | string;
    letterSpacing: string;
    lineHeight: number | string;
  }

  export type Typography = { [type in Style]: TypographyStyle } & FontStyle;

  function createTypography(
    palette: Palette,
    constants?: FontStyle
  ): Typography;

  export default createTypography;
}

declare module 'material-ui/styles/withStyles' {
  import { Theme } from 'material-ui/styles/theme';

  /**
   * This is basically the API of JSS. It defines a Map<string, CSS>,
   * where
   *
   * - the `keys` are the class (names) that will be created
   * - the `values` are objects that represent CSS rules (`React.CSSProperties`).
   */
  export interface StyleRules {
    [displayName: string]: Partial<React.CSSProperties>;
  }

  export type StyleRulesCallback = (theme: Theme) => StyleRules;

  export interface WithStylesOptions {
    withTheme?: boolean;
    name?: string;
  }

  const withStyles: <P = {}, ClassNames = {}>(
    style: StyleRules | StyleRulesCallback,
    options?: WithStylesOptions
  ) => (
    component: React.ComponentType<P & { classes: ClassNames }>
  ) => React.ComponentClass<P>;

  export default withStyles;
}

declare module 'material-ui/styles/withTheme' {
  import { Theme } from 'material-ui/styles/theme';

  const withTheme: <P = {}, T extends Theme = Theme>(
    component: React.ComponentType<P & { theme: T }>
  ) => React.ComponentClass<P>;

  export default withTheme;
}

declare module 'material-ui/styles/zIndex' {
  export interface ZIndex {
    mobileStepper: number;
    menu: number;
    appBar: number;
    drawerOverlay: number;
    navDrawer: number;
    dialogOverlay: number;
    dialog: number;
    layer: number;
    popover: number;
    snackbar: number;
    tooltip: number;
  }

  const zIndex: ZIndex;
  export default zIndex;
}

/* ============================================= */
/*                                               */
/*                  TRANSITIONS                  */
/*                                               */
/* ============================================= */
declare module 'material-ui/transitions/Collapse' {
  import { Theme } from 'material-ui/styles/theme';
  import { TransitionProps } from 'material-ui/internal/Transition';

  export interface CollapseProps extends TransitionProps {
    theme?: Theme;
    transitionDuration?: number | string;
  }

  export default class Collapse extends MaterialUI.Component<CollapseProps> {}
}

declare module 'material-ui/transitions/Fade' {
  import { Theme } from 'material-ui/styles/theme';
  import { TransitionProps } from 'material-ui/internal/Transition';

  export interface FadeProps extends TransitionProps {
    theme?: Theme;
    enterTransitionDuration?: number;
    leaveTransitionDuration?: number;
  }

  export default class Fade extends MaterialUI.Component<FadeProps> {}
}

declare module 'material-ui/transitions/Slide' {
  import { Theme } from 'material-ui/styles/theme';
  import { TransitionProps } from 'material-ui/internal/Transition';

  export interface SlideProps extends TransitionProps {
    direction?: 'left' | 'right' | 'up' | 'down';
    theme?: Theme;
    enterTransitionDuration?: number;
    leaveTransitionDuration?: number;
  }

  export default class Slide extends MaterialUI.Component<SlideProps> {}
}

/* ============================================= */
/*                                               */
/*                    TESTING                    */
/*                                               */
/* ============================================= */

declare module 'material-ui/test-utils' {
  export {
    default as createShallow,
  } from 'material-ui/test-utils/createShallow';
  export { default as createMount } from 'material-ui/test-utils/createMount';
  export { default as createRender } from 'material-ui/test-utils/createRender';
  export { default as getClasses } from 'material-ui/test-utils/getClasses';
}

declare module 'material-ui/test-utils/createMount' {
  import { mount } from 'enzyme';

  export interface MountOptions {
    mount: typeof mount;
  }

  export default function createMount(
    options?: Partial<MountOptions>
  ): typeof mount & {
    attachTo: HTMLElement;
    cleanUp: Function;
  };
}

declare module 'material-ui/test-utils/createRender' {
  import { render } from 'enzyme';

  export interface RenderOptions {
    render: typeof render;
  }

  export default function createRender(
    options?: Partial<RenderOptions>
  ): typeof render & { cleanUp: Function };
}

declare module 'material-ui/test-utils/createShallow' {
  import { shallow } from 'enzyme';

  export interface ShallowOptions {
    shallow: typeof shallow;
    otherContext: Object;
    dive: boolean;
    untilSelector: boolean;
  }

  export default function createShallow(
    options?: Partial<ShallowOptions>
  ): typeof shallow;
}

declare module 'material-ui/test-utils/getClasses' {
  export default function getClasses<T = { [name: string]: string }>(
    element: React.ReactElement<any>,
    options?: Partial<{ withTheme: boolean }>
  ): T;
}

declare module 'material-ui/test-utils/until' {
  import { CommonWrapper } from 'enzyme';

  export default function until<P = any, S = any>(
    selector: string,
    options: { context: Object }
  ): CommonWrapper<P, S>;
}

/* ============================================= */
/*                                               */
/*                     UTILS                     */
/*                                               */
/* ============================================= */

declare module 'material-ui/utils/addEventListener' {
  export default function addEventListener(
    node: Node,
    event: string,
    handler: (e: Event) => never,
    capture?: boolean
  ): { remove(): void };
}

declare module 'material-ui/utils/helpers' {
  export function capitalizeFirstLetter(str: string): string;
  export function contains(obj: Object, pred: Object): boolean;
  export function findIndex(arr: any[], pred: any): number;
  export function find<T>(arr: T[], pred: any): T;
  export function createChainedFunction(
    ...funcs: Function[]
  ): (...args: any[]) => never;
}

declare module 'material-ui/utils/keyboardFocus' {
  export function focusKeyPressed(pressed: boolean): boolean;
  export function detectKeyboardFocus(
    instance: {
      keyboardFocusTimeout: any;
      keyboardFocusCheckTime: number;
      keyboardFocusMaxCheckTimes: number;
    },
    element: Element,
    cb: Function,
    attempt: number
  ): never;
  export function listenForFocusKeys(): never;
}

declare module 'material-ui/utils/manageAriaHidden' {
  export function ariaHidden(show: boolean, node: Node): never;
  export function hideSiblings(container: Element, mountNode: Node): never;
  export function showSiblings(container: Element, mountNode: Node): never;
}

declare module 'material-ui/utils/reactHelpers' {
  export function cloneChildrenWithClassName<T>(
    children: React.ReactNode,
    className: string
  ): T[];
}

declare module 'material-ui/utils/requirePropFactory' {
  // Internal anyway ...
  export default function requirePropFactory(componentNameInError: string): any;
}

declare module 'material-ui/utils/withWidth' {
  import { Breakpoint } from 'material-ui/styles/breakpoints';
  export interface WithWidthOptions {
    resizeInterval: number;
  }

  export interface WithWidthEnhancement {
    width: number;
  }

  export function isWidthUp(
    breakpoint: Breakpoint,
    screenWidth: number,
    inclusive?: boolean
  ): boolean;

  export default function withWidth<P = {}>(
    options?: WithWidthOptions
  ): (
    component: React.ComponentType<P>
  ) => React.ComponentClass<P & WithWidthEnhancement>;
}

declare module 'material-ui-icons/AccessAlarm' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AccessAlarm extends SvgIcon {}
}

declare module 'material-ui-icons/AccessAlarms' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AccessAlarms extends SvgIcon {}
}

declare module 'material-ui-icons/Accessibility' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Accessibility extends SvgIcon {}
}

declare module 'material-ui-icons/Accessible' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Accessible extends SvgIcon {}
}

declare module 'material-ui-icons/AccessTime' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AccessTime extends SvgIcon {}
}

declare module 'material-ui-icons/AccountBalance' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AccountBalance extends SvgIcon {}
}

declare module 'material-ui-icons/AccountBalanceWallet' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AccountBalanceWallet extends SvgIcon {}
}

declare module 'material-ui-icons/AccountBox' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AccountBox extends SvgIcon {}
}

declare module 'material-ui-icons/AccountCircle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AccountCircle extends SvgIcon {}
}

declare module 'material-ui-icons/AcUnit' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AcUnit extends SvgIcon {}
}

declare module 'material-ui-icons/Adb' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Adb extends SvgIcon {}
}

declare module 'material-ui-icons/Add' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Add extends SvgIcon {}
}

declare module 'material-ui-icons/AddAlarm' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AddAlarm extends SvgIcon {}
}

declare module 'material-ui-icons/AddAlert' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AddAlert extends SvgIcon {}
}

declare module 'material-ui-icons/AddAPhoto' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AddAPhoto extends SvgIcon {}
}

declare module 'material-ui-icons/AddBox' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AddBox extends SvgIcon {}
}

declare module 'material-ui-icons/AddCircle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AddCircle extends SvgIcon {}
}

declare module 'material-ui-icons/AddCircleOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AddCircleOutline extends SvgIcon {}
}

declare module 'material-ui-icons/AddLocation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AddLocation extends SvgIcon {}
}

declare module 'material-ui-icons/AddShoppingCart' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AddShoppingCart extends SvgIcon {}
}

declare module 'material-ui-icons/AddToPhotos' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AddToPhotos extends SvgIcon {}
}

declare module 'material-ui-icons/AddToQueue' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AddToQueue extends SvgIcon {}
}

declare module 'material-ui-icons/Adjust' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Adjust extends SvgIcon {}
}

declare module 'material-ui-icons/AirlineSeatFlat' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirlineSeatFlat extends SvgIcon {}
}

declare module 'material-ui-icons/AirlineSeatFlatAngled' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirlineSeatFlatAngled extends SvgIcon {}
}

declare module 'material-ui-icons/AirlineSeatIndividualSuite' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirlineSeatIndividualSuite extends SvgIcon {}
}

declare module 'material-ui-icons/AirlineSeatLegroomExtra' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirlineSeatLegroomExtra extends SvgIcon {}
}

declare module 'material-ui-icons/AirlineSeatLegroomNormal' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirlineSeatLegroomNormal extends SvgIcon {}
}

declare module 'material-ui-icons/AirlineSeatLegroomReduced' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirlineSeatLegroomReduced extends SvgIcon {}
}

declare module 'material-ui-icons/AirlineSeatReclineExtra' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirlineSeatReclineExtra extends SvgIcon {}
}

declare module 'material-ui-icons/AirlineSeatReclineNormal' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirlineSeatReclineNormal extends SvgIcon {}
}

declare module 'material-ui-icons/AirplanemodeActive' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirplanemodeActive extends SvgIcon {}
}

declare module 'material-ui-icons/AirplanemodeInactive' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirplanemodeInactive extends SvgIcon {}
}

declare module 'material-ui-icons/Airplay' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Airplay extends SvgIcon {}
}

declare module 'material-ui-icons/AirportShuttle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AirportShuttle extends SvgIcon {}
}

declare module 'material-ui-icons/Alarm' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Alarm extends SvgIcon {}
}

declare module 'material-ui-icons/AlarmAdd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AlarmAdd extends SvgIcon {}
}

declare module 'material-ui-icons/AlarmOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AlarmOff extends SvgIcon {}
}

declare module 'material-ui-icons/AlarmOn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AlarmOn extends SvgIcon {}
}

declare module 'material-ui-icons/Album' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Album extends SvgIcon {}
}

declare module 'material-ui-icons/AllInclusive' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AllInclusive extends SvgIcon {}
}

declare module 'material-ui-icons/AllOut' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AllOut extends SvgIcon {}
}

declare module 'material-ui-icons/Android' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Android extends SvgIcon {}
}

declare module 'material-ui-icons/Announcement' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Announcement extends SvgIcon {}
}

declare module 'material-ui-icons/Apps' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Apps extends SvgIcon {}
}

declare module 'material-ui-icons/Archive' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Archive extends SvgIcon {}
}

declare module 'material-ui-icons/ArrowBack' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ArrowBack extends SvgIcon {}
}

declare module 'material-ui-icons/ArrowDownward' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ArrowDownward extends SvgIcon {}
}

declare module 'material-ui-icons/ArrowDropDown' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ArrowDropDown extends SvgIcon {}
}

declare module 'material-ui-icons/ArrowDropDownCircle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ArrowDropDownCircle extends SvgIcon {}
}

declare module 'material-ui-icons/ArrowDropUp' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ArrowDropUp extends SvgIcon {}
}

declare module 'material-ui-icons/ArrowForward' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ArrowForward extends SvgIcon {}
}

declare module 'material-ui-icons/ArrowUpward' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ArrowUpward extends SvgIcon {}
}

declare module 'material-ui-icons/ArtTrack' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ArtTrack extends SvgIcon {}
}

declare module 'material-ui-icons/AspectRatio' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AspectRatio extends SvgIcon {}
}

declare module 'material-ui-icons/Assessment' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Assessment extends SvgIcon {}
}

declare module 'material-ui-icons/Assignment' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Assignment extends SvgIcon {}
}

declare module 'material-ui-icons/AssignmentInd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AssignmentInd extends SvgIcon {}
}

declare module 'material-ui-icons/AssignmentLate' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AssignmentLate extends SvgIcon {}
}

declare module 'material-ui-icons/AssignmentReturn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AssignmentReturn extends SvgIcon {}
}

declare module 'material-ui-icons/AssignmentReturned' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AssignmentReturned extends SvgIcon {}
}

declare module 'material-ui-icons/AssignmentTurnedIn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AssignmentTurnedIn extends SvgIcon {}
}

declare module 'material-ui-icons/Assistant' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Assistant extends SvgIcon {}
}

declare module 'material-ui-icons/AssistantPhoto' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AssistantPhoto extends SvgIcon {}
}

declare module 'material-ui-icons/AttachFile' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AttachFile extends SvgIcon {}
}

declare module 'material-ui-icons/Attachment' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Attachment extends SvgIcon {}
}

declare module 'material-ui-icons/AttachMoney' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AttachMoney extends SvgIcon {}
}

declare module 'material-ui-icons/Audiotrack' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Audiotrack extends SvgIcon {}
}

declare module 'material-ui-icons/Autorenew' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Autorenew extends SvgIcon {}
}

declare module 'material-ui-icons/AvTimer' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class AvTimer extends SvgIcon {}
}

declare module 'material-ui-icons/Backspace' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Backspace extends SvgIcon {}
}

declare module 'material-ui-icons/Backup' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Backup extends SvgIcon {}
}

declare module 'material-ui-icons/Battery20' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Battery20 extends SvgIcon {}
}

declare module 'material-ui-icons/Battery30' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Battery30 extends SvgIcon {}
}

declare module 'material-ui-icons/Battery50' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Battery50 extends SvgIcon {}
}

declare module 'material-ui-icons/Battery60' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Battery60 extends SvgIcon {}
}

declare module 'material-ui-icons/Battery80' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Battery80 extends SvgIcon {}
}

declare module 'material-ui-icons/Battery90' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Battery90 extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryAlert' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryAlert extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryCharging20' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryCharging20 extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryCharging30' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryCharging30 extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryCharging50' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryCharging50 extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryCharging60' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryCharging60 extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryCharging80' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryCharging80 extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryCharging90' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryCharging90 extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryChargingFull' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryChargingFull extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryFull' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryFull extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryStd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryStd extends SvgIcon {}
}

declare module 'material-ui-icons/BatteryUnknown' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BatteryUnknown extends SvgIcon {}
}

declare module 'material-ui-icons/BeachAccess' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BeachAccess extends SvgIcon {}
}

declare module 'material-ui-icons/Beenhere' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Beenhere extends SvgIcon {}
}

declare module 'material-ui-icons/Block' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Block extends SvgIcon {}
}

declare module 'material-ui-icons/Bluetooth' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Bluetooth extends SvgIcon {}
}

declare module 'material-ui-icons/BluetoothAudio' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BluetoothAudio extends SvgIcon {}
}

declare module 'material-ui-icons/BluetoothConnected' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BluetoothConnected extends SvgIcon {}
}

declare module 'material-ui-icons/BluetoothDisabled' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BluetoothDisabled extends SvgIcon {}
}

declare module 'material-ui-icons/BluetoothSearching' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BluetoothSearching extends SvgIcon {}
}

declare module 'material-ui-icons/BlurCircular' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BlurCircular extends SvgIcon {}
}

declare module 'material-ui-icons/BlurLinear' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BlurLinear extends SvgIcon {}
}

declare module 'material-ui-icons/BlurOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BlurOff extends SvgIcon {}
}

declare module 'material-ui-icons/BlurOn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BlurOn extends SvgIcon {}
}

declare module 'material-ui-icons/Book' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Book extends SvgIcon {}
}

declare module 'material-ui-icons/Bookmark' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Bookmark extends SvgIcon {}
}

declare module 'material-ui-icons/BookmarkBorder' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BookmarkBorder extends SvgIcon {}
}

declare module 'material-ui-icons/BorderAll' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderAll extends SvgIcon {}
}

declare module 'material-ui-icons/BorderBottom' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderBottom extends SvgIcon {}
}

declare module 'material-ui-icons/BorderClear' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderClear extends SvgIcon {}
}

declare module 'material-ui-icons/BorderColor' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderColor extends SvgIcon {}
}

declare module 'material-ui-icons/BorderHorizontal' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderHorizontal extends SvgIcon {}
}

declare module 'material-ui-icons/BorderInner' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderInner extends SvgIcon {}
}

declare module 'material-ui-icons/BorderLeft' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderLeft extends SvgIcon {}
}

declare module 'material-ui-icons/BorderOuter' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderOuter extends SvgIcon {}
}

declare module 'material-ui-icons/BorderRight' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderRight extends SvgIcon {}
}

declare module 'material-ui-icons/BorderStyle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderStyle extends SvgIcon {}
}

declare module 'material-ui-icons/BorderTop' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderTop extends SvgIcon {}
}

declare module 'material-ui-icons/BorderVertical' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BorderVertical extends SvgIcon {}
}

declare module 'material-ui-icons/BrandingWatermark' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BrandingWatermark extends SvgIcon {}
}

declare module 'material-ui-icons/Brightness1' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Brightness1 extends SvgIcon {}
}

declare module 'material-ui-icons/Brightness2' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Brightness2 extends SvgIcon {}
}

declare module 'material-ui-icons/Brightness3' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Brightness3 extends SvgIcon {}
}

declare module 'material-ui-icons/Brightness4' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Brightness4 extends SvgIcon {}
}

declare module 'material-ui-icons/Brightness5' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Brightness5 extends SvgIcon {}
}

declare module 'material-ui-icons/Brightness6' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Brightness6 extends SvgIcon {}
}

declare module 'material-ui-icons/Brightness7' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Brightness7 extends SvgIcon {}
}

declare module 'material-ui-icons/BrightnessAuto' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BrightnessAuto extends SvgIcon {}
}

declare module 'material-ui-icons/BrightnessHigh' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BrightnessHigh extends SvgIcon {}
}

declare module 'material-ui-icons/BrightnessLow' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BrightnessLow extends SvgIcon {}
}

declare module 'material-ui-icons/BrightnessMedium' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BrightnessMedium extends SvgIcon {}
}

declare module 'material-ui-icons/BrokenImage' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BrokenImage extends SvgIcon {}
}

declare module 'material-ui-icons/Brush' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Brush extends SvgIcon {}
}

declare module 'material-ui-icons/BubbleChart' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BubbleChart extends SvgIcon {}
}

declare module 'material-ui-icons/BugReport' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BugReport extends SvgIcon {}
}

declare module 'material-ui-icons/Build' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Build extends SvgIcon {}
}

declare module 'material-ui-icons/BurstMode' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BurstMode extends SvgIcon {}
}

declare module 'material-ui-icons/Business' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Business extends SvgIcon {}
}

declare module 'material-ui-icons/BusinessCenter' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class BusinessCenter extends SvgIcon {}
}

declare module 'material-ui-icons/Cached' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Cached extends SvgIcon {}
}

declare module 'material-ui-icons/Cake' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Cake extends SvgIcon {}
}

declare module 'material-ui-icons/Call' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Call extends SvgIcon {}
}

declare module 'material-ui-icons/CallEnd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CallEnd extends SvgIcon {}
}

declare module 'material-ui-icons/CallMade' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CallMade extends SvgIcon {}
}

declare module 'material-ui-icons/CallMerge' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CallMerge extends SvgIcon {}
}

declare module 'material-ui-icons/CallMissed' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CallMissed extends SvgIcon {}
}

declare module 'material-ui-icons/CallMissedOutgoing' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CallMissedOutgoing extends SvgIcon {}
}

declare module 'material-ui-icons/CallReceived' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CallReceived extends SvgIcon {}
}

declare module 'material-ui-icons/CallSplit' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CallSplit extends SvgIcon {}
}

declare module 'material-ui-icons/CallToAction' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CallToAction extends SvgIcon {}
}

declare module 'material-ui-icons/Camera' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Camera extends SvgIcon {}
}

declare module 'material-ui-icons/CameraAlt' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CameraAlt extends SvgIcon {}
}

declare module 'material-ui-icons/CameraEnhance' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CameraEnhance extends SvgIcon {}
}

declare module 'material-ui-icons/CameraFront' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CameraFront extends SvgIcon {}
}

declare module 'material-ui-icons/CameraRear' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CameraRear extends SvgIcon {}
}

declare module 'material-ui-icons/CameraRoll' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CameraRoll extends SvgIcon {}
}

declare module 'material-ui-icons/Cancel' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Cancel extends SvgIcon {}
}

declare module 'material-ui-icons/CardGiftcard' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CardGiftcard extends SvgIcon {}
}

declare module 'material-ui-icons/CardMembership' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CardMembership extends SvgIcon {}
}

declare module 'material-ui-icons/CardTravel' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CardTravel extends SvgIcon {}
}

declare module 'material-ui-icons/Casino' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Casino extends SvgIcon {}
}

declare module 'material-ui-icons/Cast' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Cast extends SvgIcon {}
}

declare module 'material-ui-icons/CastConnected' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CastConnected extends SvgIcon {}
}

declare module 'material-ui-icons/CenterFocusStrong' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CenterFocusStrong extends SvgIcon {}
}

declare module 'material-ui-icons/CenterFocusWeak' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CenterFocusWeak extends SvgIcon {}
}

declare module 'material-ui-icons/ChangeHistory' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ChangeHistory extends SvgIcon {}
}

declare module 'material-ui-icons/Chat' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Chat extends SvgIcon {}
}

declare module 'material-ui-icons/ChatBubble' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ChatBubble extends SvgIcon {}
}

declare module 'material-ui-icons/ChatBubbleOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ChatBubbleOutline extends SvgIcon {}
}

declare module 'material-ui-icons/Check' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Check extends SvgIcon {}
}

declare module 'material-ui-icons/CheckBox' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CheckBox extends SvgIcon {}
}

declare module 'material-ui-icons/CheckBoxOutlineBlank' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CheckBoxOutlineBlank extends SvgIcon {}
}

declare module 'material-ui-icons/CheckCircle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CheckCircle extends SvgIcon {}
}

declare module 'material-ui-icons/ChevronLeft' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ChevronLeft extends SvgIcon {}
}

declare module 'material-ui-icons/ChevronRight' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ChevronRight extends SvgIcon {}
}

declare module 'material-ui-icons/ChildCare' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ChildCare extends SvgIcon {}
}

declare module 'material-ui-icons/ChildFriendly' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ChildFriendly extends SvgIcon {}
}

declare module 'material-ui-icons/ChromeReaderMode' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ChromeReaderMode extends SvgIcon {}
}

declare module 'material-ui-icons/Class' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Class extends SvgIcon {}
}

declare module 'material-ui-icons/Clear' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Clear extends SvgIcon {}
}

declare module 'material-ui-icons/ClearAll' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ClearAll extends SvgIcon {}
}

declare module 'material-ui-icons/Close' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Close extends SvgIcon {}
}

declare module 'material-ui-icons/ClosedCaption' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ClosedCaption extends SvgIcon {}
}

declare module 'material-ui-icons/Cloud' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Cloud extends SvgIcon {}
}

declare module 'material-ui-icons/CloudCircle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CloudCircle extends SvgIcon {}
}

declare module 'material-ui-icons/CloudDone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CloudDone extends SvgIcon {}
}

declare module 'material-ui-icons/CloudDownload' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CloudDownload extends SvgIcon {}
}

declare module 'material-ui-icons/CloudOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CloudOff extends SvgIcon {}
}

declare module 'material-ui-icons/CloudQueue' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CloudQueue extends SvgIcon {}
}

declare module 'material-ui-icons/CloudUpload' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CloudUpload extends SvgIcon {}
}

declare module 'material-ui-icons/Code' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Code extends SvgIcon {}
}

declare module 'material-ui-icons/Collections' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Collections extends SvgIcon {}
}

declare module 'material-ui-icons/CollectionsBookmark' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CollectionsBookmark extends SvgIcon {}
}

declare module 'material-ui-icons/Colorize' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Colorize extends SvgIcon {}
}

declare module 'material-ui-icons/ColorLens' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ColorLens extends SvgIcon {}
}

declare module 'material-ui-icons/Comment' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Comment extends SvgIcon {}
}

declare module 'material-ui-icons/Compare' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Compare extends SvgIcon {}
}

declare module 'material-ui-icons/CompareArrows' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CompareArrows extends SvgIcon {}
}

declare module 'material-ui-icons/Computer' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Computer extends SvgIcon {}
}

declare module 'material-ui-icons/ConfirmationNumber' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ConfirmationNumber extends SvgIcon {}
}

declare module 'material-ui-icons/ContactMail' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ContactMail extends SvgIcon {}
}

declare module 'material-ui-icons/ContactPhone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ContactPhone extends SvgIcon {}
}

declare module 'material-ui-icons/Contacts' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Contacts extends SvgIcon {}
}

declare module 'material-ui-icons/ContentCopy' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ContentCopy extends SvgIcon {}
}

declare module 'material-ui-icons/ContentCut' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ContentCut extends SvgIcon {}
}

declare module 'material-ui-icons/ContentPaste' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ContentPaste extends SvgIcon {}
}

declare module 'material-ui-icons/ControlPoint' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ControlPoint extends SvgIcon {}
}

declare module 'material-ui-icons/ControlPointDuplicate' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ControlPointDuplicate extends SvgIcon {}
}

declare module 'material-ui-icons/Copyright' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Copyright extends SvgIcon {}
}

declare module 'material-ui-icons/Create' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Create extends SvgIcon {}
}

declare module 'material-ui-icons/CreateNewFolder' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CreateNewFolder extends SvgIcon {}
}

declare module 'material-ui-icons/CreditCard' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CreditCard extends SvgIcon {}
}

declare module 'material-ui-icons/Crop' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Crop extends SvgIcon {}
}

declare module 'material-ui-icons/Crop169' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Crop169 extends SvgIcon {}
}

declare module 'material-ui-icons/Crop32' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Crop32 extends SvgIcon {}
}

declare module 'material-ui-icons/Crop54' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Crop54 extends SvgIcon {}
}

declare module 'material-ui-icons/Crop75' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Crop75 extends SvgIcon {}
}

declare module 'material-ui-icons/CropDin' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CropDin extends SvgIcon {}
}

declare module 'material-ui-icons/CropFree' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CropFree extends SvgIcon {}
}

declare module 'material-ui-icons/CropLandscape' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CropLandscape extends SvgIcon {}
}

declare module 'material-ui-icons/CropOriginal' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CropOriginal extends SvgIcon {}
}

declare module 'material-ui-icons/CropPortrait' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CropPortrait extends SvgIcon {}
}

declare module 'material-ui-icons/CropRotate' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CropRotate extends SvgIcon {}
}

declare module 'material-ui-icons/CropSquare' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class CropSquare extends SvgIcon {}
}

declare module 'material-ui-icons/Dashboard' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Dashboard extends SvgIcon {}
}

declare module 'material-ui-icons/DataUsage' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DataUsage extends SvgIcon {}
}

declare module 'material-ui-icons/DateRange' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DateRange extends SvgIcon {}
}

declare module 'material-ui-icons/Dehaze' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Dehaze extends SvgIcon {}
}

declare module 'material-ui-icons/Delete' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Delete extends SvgIcon {}
}

declare module 'material-ui-icons/DeleteForever' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DeleteForever extends SvgIcon {}
}

declare module 'material-ui-icons/DeleteSweep' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DeleteSweep extends SvgIcon {}
}

declare module 'material-ui-icons/Description' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Description extends SvgIcon {}
}

declare module 'material-ui-icons/DesktopMac' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DesktopMac extends SvgIcon {}
}

declare module 'material-ui-icons/DesktopWindows' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DesktopWindows extends SvgIcon {}
}

declare module 'material-ui-icons/Details' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Details extends SvgIcon {}
}

declare module 'material-ui-icons/DeveloperBoard' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DeveloperBoard extends SvgIcon {}
}

declare module 'material-ui-icons/DeveloperMode' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DeveloperMode extends SvgIcon {}
}

declare module 'material-ui-icons/DeviceHub' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DeviceHub extends SvgIcon {}
}

declare module 'material-ui-icons/Devices' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Devices extends SvgIcon {}
}

declare module 'material-ui-icons/DevicesOther' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DevicesOther extends SvgIcon {}
}

declare module 'material-ui-icons/DialerSip' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DialerSip extends SvgIcon {}
}

declare module 'material-ui-icons/Dialpad' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Dialpad extends SvgIcon {}
}

declare module 'material-ui-icons/Directions' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Directions extends SvgIcon {}
}

declare module 'material-ui-icons/DirectionsBike' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DirectionsBike extends SvgIcon {}
}

declare module 'material-ui-icons/DirectionsBoat' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DirectionsBoat extends SvgIcon {}
}

declare module 'material-ui-icons/DirectionsBus' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DirectionsBus extends SvgIcon {}
}

declare module 'material-ui-icons/DirectionsCar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DirectionsCar extends SvgIcon {}
}

declare module 'material-ui-icons/DirectionsRailway' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DirectionsRailway extends SvgIcon {}
}

declare module 'material-ui-icons/DirectionsRun' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DirectionsRun extends SvgIcon {}
}

declare module 'material-ui-icons/DirectionsSubway' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DirectionsSubway extends SvgIcon {}
}

declare module 'material-ui-icons/DirectionsTransit' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DirectionsTransit extends SvgIcon {}
}

declare module 'material-ui-icons/DirectionsWalk' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DirectionsWalk extends SvgIcon {}
}

declare module 'material-ui-icons/DiscFull' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DiscFull extends SvgIcon {}
}

declare module 'material-ui-icons/Dns' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Dns extends SvgIcon {}
}

declare module 'material-ui-icons/Dock' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Dock extends SvgIcon {}
}

declare module 'material-ui-icons/Domain' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Domain extends SvgIcon {}
}

declare module 'material-ui-icons/Done' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Done extends SvgIcon {}
}

declare module 'material-ui-icons/DoneAll' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DoneAll extends SvgIcon {}
}

declare module 'material-ui-icons/DoNotDisturb' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DoNotDisturb extends SvgIcon {}
}

declare module 'material-ui-icons/DoNotDisturbAlt' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DoNotDisturbAlt extends SvgIcon {}
}

declare module 'material-ui-icons/DoNotDisturbOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DoNotDisturbOff extends SvgIcon {}
}

declare module 'material-ui-icons/DoNotDisturbOn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DoNotDisturbOn extends SvgIcon {}
}

declare module 'material-ui-icons/DonutLarge' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DonutLarge extends SvgIcon {}
}

declare module 'material-ui-icons/DonutSmall' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DonutSmall extends SvgIcon {}
}

declare module 'material-ui-icons/Drafts' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Drafts extends SvgIcon {}
}

declare module 'material-ui-icons/DragHandle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DragHandle extends SvgIcon {}
}

declare module 'material-ui-icons/DriveEta' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class DriveEta extends SvgIcon {}
}

declare module 'material-ui-icons/Dvr' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Dvr extends SvgIcon {}
}

declare module 'material-ui-icons/Edit' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Edit extends SvgIcon {}
}

declare module 'material-ui-icons/EditLocation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class EditLocation extends SvgIcon {}
}

declare module 'material-ui-icons/Eject' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Eject extends SvgIcon {}
}

declare module 'material-ui-icons/Email' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Email extends SvgIcon {}
}

declare module 'material-ui-icons/EnhancedEncryption' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class EnhancedEncryption extends SvgIcon {}
}

declare module 'material-ui-icons/Equalizer' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Equalizer extends SvgIcon {}
}

declare module 'material-ui-icons/Error' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Error extends SvgIcon {}
}

declare module 'material-ui-icons/ErrorOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ErrorOutline extends SvgIcon {}
}

declare module 'material-ui-icons/EuroSymbol' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class EuroSymbol extends SvgIcon {}
}

declare module 'material-ui-icons/Event' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Event extends SvgIcon {}
}

declare module 'material-ui-icons/EventAvailable' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class EventAvailable extends SvgIcon {}
}

declare module 'material-ui-icons/EventBusy' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class EventBusy extends SvgIcon {}
}

declare module 'material-ui-icons/EventNote' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class EventNote extends SvgIcon {}
}

declare module 'material-ui-icons/EventSeat' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class EventSeat extends SvgIcon {}
}

declare module 'material-ui-icons/EvStation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class EvStation extends SvgIcon {}
}

declare module 'material-ui-icons/ExitToApp' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ExitToApp extends SvgIcon {}
}

declare module 'material-ui-icons/ExpandLess' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ExpandLess extends SvgIcon {}
}

declare module 'material-ui-icons/ExpandMore' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ExpandMore extends SvgIcon {}
}

declare module 'material-ui-icons/Explicit' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Explicit extends SvgIcon {}
}

declare module 'material-ui-icons/Explore' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Explore extends SvgIcon {}
}

declare module 'material-ui-icons/Exposure' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Exposure extends SvgIcon {}
}

declare module 'material-ui-icons/ExposureNeg1' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ExposureNeg1 extends SvgIcon {}
}

declare module 'material-ui-icons/ExposureNeg2' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ExposureNeg2 extends SvgIcon {}
}

declare module 'material-ui-icons/ExposurePlus1' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ExposurePlus1 extends SvgIcon {}
}

declare module 'material-ui-icons/ExposurePlus2' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ExposurePlus2 extends SvgIcon {}
}

declare module 'material-ui-icons/ExposureZero' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ExposureZero extends SvgIcon {}
}

declare module 'material-ui-icons/Extension' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Extension extends SvgIcon {}
}

declare module 'material-ui-icons/Face' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Face extends SvgIcon {}
}

declare module 'material-ui-icons/FastForward' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FastForward extends SvgIcon {}
}

declare module 'material-ui-icons/FastRewind' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FastRewind extends SvgIcon {}
}

declare module 'material-ui-icons/Favorite' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Favorite extends SvgIcon {}
}

declare module 'material-ui-icons/FavoriteBorder' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FavoriteBorder extends SvgIcon {}
}

declare module 'material-ui-icons/FeaturedPlayList' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FeaturedPlayList extends SvgIcon {}
}

declare module 'material-ui-icons/FeaturedVideo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FeaturedVideo extends SvgIcon {}
}

declare module 'material-ui-icons/Feedback' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Feedback extends SvgIcon {}
}

declare module 'material-ui-icons/FiberDvr' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FiberDvr extends SvgIcon {}
}

declare module 'material-ui-icons/FiberManualRecord' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FiberManualRecord extends SvgIcon {}
}

declare module 'material-ui-icons/FiberNew' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FiberNew extends SvgIcon {}
}

declare module 'material-ui-icons/FiberPin' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FiberPin extends SvgIcon {}
}

declare module 'material-ui-icons/FiberSmartRecord' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FiberSmartRecord extends SvgIcon {}
}

declare module 'material-ui-icons/FileDownload' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FileDownload extends SvgIcon {}
}

declare module 'material-ui-icons/FileUpload' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FileUpload extends SvgIcon {}
}

declare module 'material-ui-icons/Filter' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter extends SvgIcon {}
}

declare module 'material-ui-icons/Filter1' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter1 extends SvgIcon {}
}

declare module 'material-ui-icons/Filter2' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter2 extends SvgIcon {}
}

declare module 'material-ui-icons/Filter3' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter3 extends SvgIcon {}
}

declare module 'material-ui-icons/Filter4' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter4 extends SvgIcon {}
}

declare module 'material-ui-icons/Filter5' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter5 extends SvgIcon {}
}

declare module 'material-ui-icons/Filter6' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter6 extends SvgIcon {}
}

declare module 'material-ui-icons/Filter7' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter7 extends SvgIcon {}
}

declare module 'material-ui-icons/Filter8' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter8 extends SvgIcon {}
}

declare module 'material-ui-icons/Filter9' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter9 extends SvgIcon {}
}

declare module 'material-ui-icons/Filter9Plus' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Filter9Plus extends SvgIcon {}
}

declare module 'material-ui-icons/FilterBAndW' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FilterBAndW extends SvgIcon {}
}

declare module 'material-ui-icons/FilterCenterFocus' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FilterCenterFocus extends SvgIcon {}
}

declare module 'material-ui-icons/FilterDrama' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FilterDrama extends SvgIcon {}
}

declare module 'material-ui-icons/FilterFrames' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FilterFrames extends SvgIcon {}
}

declare module 'material-ui-icons/FilterHdr' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FilterHdr extends SvgIcon {}
}

declare module 'material-ui-icons/FilterList' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FilterList extends SvgIcon {}
}

declare module 'material-ui-icons/FilterNone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FilterNone extends SvgIcon {}
}

declare module 'material-ui-icons/FilterTiltShift' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FilterTiltShift extends SvgIcon {}
}

declare module 'material-ui-icons/FilterVintage' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FilterVintage extends SvgIcon {}
}

declare module 'material-ui-icons/FindInPage' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FindInPage extends SvgIcon {}
}

declare module 'material-ui-icons/FindReplace' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FindReplace extends SvgIcon {}
}

declare module 'material-ui-icons/Fingerprint' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Fingerprint extends SvgIcon {}
}

declare module 'material-ui-icons/FirstPage' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FirstPage extends SvgIcon {}
}

declare module 'material-ui-icons/FitnessCenter' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FitnessCenter extends SvgIcon {}
}

declare module 'material-ui-icons/Flag' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Flag extends SvgIcon {}
}

declare module 'material-ui-icons/Flare' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Flare extends SvgIcon {}
}

declare module 'material-ui-icons/FlashAuto' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FlashAuto extends SvgIcon {}
}

declare module 'material-ui-icons/FlashOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FlashOff extends SvgIcon {}
}

declare module 'material-ui-icons/FlashOn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FlashOn extends SvgIcon {}
}

declare module 'material-ui-icons/Flight' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Flight extends SvgIcon {}
}

declare module 'material-ui-icons/FlightLand' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FlightLand extends SvgIcon {}
}

declare module 'material-ui-icons/FlightTakeoff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FlightTakeoff extends SvgIcon {}
}

declare module 'material-ui-icons/Flip' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Flip extends SvgIcon {}
}

declare module 'material-ui-icons/FlipToBack' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FlipToBack extends SvgIcon {}
}

declare module 'material-ui-icons/FlipToFront' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FlipToFront extends SvgIcon {}
}

declare module 'material-ui-icons/Folder' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Folder extends SvgIcon {}
}

declare module 'material-ui-icons/FolderOpen' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FolderOpen extends SvgIcon {}
}

declare module 'material-ui-icons/FolderShared' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FolderShared extends SvgIcon {}
}

declare module 'material-ui-icons/FolderSpecial' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FolderSpecial extends SvgIcon {}
}

declare module 'material-ui-icons/FontDownload' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FontDownload extends SvgIcon {}
}

declare module 'material-ui-icons/FormatAlignCenter' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatAlignCenter extends SvgIcon {}
}

declare module 'material-ui-icons/FormatAlignJustify' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatAlignJustify extends SvgIcon {}
}

declare module 'material-ui-icons/FormatAlignLeft' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatAlignLeft extends SvgIcon {}
}

declare module 'material-ui-icons/FormatAlignRight' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatAlignRight extends SvgIcon {}
}

declare module 'material-ui-icons/FormatBold' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatBold extends SvgIcon {}
}

declare module 'material-ui-icons/FormatClear' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatClear extends SvgIcon {}
}

declare module 'material-ui-icons/FormatColorFill' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatColorFill extends SvgIcon {}
}

declare module 'material-ui-icons/FormatColorReset' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatColorReset extends SvgIcon {}
}

declare module 'material-ui-icons/FormatColorText' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatColorText extends SvgIcon {}
}

declare module 'material-ui-icons/FormatIndentDecrease' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatIndentDecrease extends SvgIcon {}
}

declare module 'material-ui-icons/FormatIndentIncrease' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatIndentIncrease extends SvgIcon {}
}

declare module 'material-ui-icons/FormatItalic' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatItalic extends SvgIcon {}
}

declare module 'material-ui-icons/FormatLineSpacing' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatLineSpacing extends SvgIcon {}
}

declare module 'material-ui-icons/FormatListBulleted' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatListBulleted extends SvgIcon {}
}

declare module 'material-ui-icons/FormatListNumbered' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatListNumbered extends SvgIcon {}
}

declare module 'material-ui-icons/FormatPaint' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatPaint extends SvgIcon {}
}

declare module 'material-ui-icons/FormatQuote' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatQuote extends SvgIcon {}
}

declare module 'material-ui-icons/FormatShapes' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatShapes extends SvgIcon {}
}

declare module 'material-ui-icons/FormatSize' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatSize extends SvgIcon {}
}

declare module 'material-ui-icons/FormatStrikethrough' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatStrikethrough extends SvgIcon {}
}

declare module 'material-ui-icons/FormatTextdirectionLToR' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatTextdirectionLToR extends SvgIcon {}
}

declare module 'material-ui-icons/FormatTextdirectionRToL' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatTextdirectionRToL extends SvgIcon {}
}

declare module 'material-ui-icons/FormatUnderlined' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FormatUnderlined extends SvgIcon {}
}

declare module 'material-ui-icons/Forum' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Forum extends SvgIcon {}
}

declare module 'material-ui-icons/Forward' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Forward extends SvgIcon {}
}

declare module 'material-ui-icons/Forward10' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Forward10 extends SvgIcon {}
}

declare module 'material-ui-icons/Forward30' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Forward30 extends SvgIcon {}
}

declare module 'material-ui-icons/Forward5' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Forward5 extends SvgIcon {}
}

declare module 'material-ui-icons/FreeBreakfast' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FreeBreakfast extends SvgIcon {}
}

declare module 'material-ui-icons/Fullscreen' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Fullscreen extends SvgIcon {}
}

declare module 'material-ui-icons/FullscreenExit' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class FullscreenExit extends SvgIcon {}
}

declare module 'material-ui-icons/Functions' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Functions extends SvgIcon {}
}

declare module 'material-ui-icons/Gamepad' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Gamepad extends SvgIcon {}
}

declare module 'material-ui-icons/Games' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Games extends SvgIcon {}
}

declare module 'material-ui-icons/Gavel' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Gavel extends SvgIcon {}
}

declare module 'material-ui-icons/Gesture' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Gesture extends SvgIcon {}
}

declare module 'material-ui-icons/GetApp' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GetApp extends SvgIcon {}
}

declare module 'material-ui-icons/Gif' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Gif extends SvgIcon {}
}

declare module 'material-ui-icons/GolfCourse' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GolfCourse extends SvgIcon {}
}

declare module 'material-ui-icons/GpsFixed' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GpsFixed extends SvgIcon {}
}

declare module 'material-ui-icons/GpsNotFixed' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GpsNotFixed extends SvgIcon {}
}

declare module 'material-ui-icons/GpsOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GpsOff extends SvgIcon {}
}

declare module 'material-ui-icons/Grade' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Grade extends SvgIcon {}
}

declare module 'material-ui-icons/Gradient' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Gradient extends SvgIcon {}
}

declare module 'material-ui-icons/Grain' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Grain extends SvgIcon {}
}

declare module 'material-ui-icons/GraphicEq' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GraphicEq extends SvgIcon {}
}

declare module 'material-ui-icons/GridOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GridOff extends SvgIcon {}
}

declare module 'material-ui-icons/GridOn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GridOn extends SvgIcon {}
}

declare module 'material-ui-icons/Group' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Group extends SvgIcon {}
}

declare module 'material-ui-icons/GroupAdd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GroupAdd extends SvgIcon {}
}

declare module 'material-ui-icons/GroupWork' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GroupWork extends SvgIcon {}
}

declare module 'material-ui-icons/GTranslate' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class GTranslate extends SvgIcon {}
}

declare module 'material-ui-icons/Hd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Hd extends SvgIcon {}
}

declare module 'material-ui-icons/HdrOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HdrOff extends SvgIcon {}
}

declare module 'material-ui-icons/HdrOn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HdrOn extends SvgIcon {}
}

declare module 'material-ui-icons/HdrStrong' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HdrStrong extends SvgIcon {}
}

declare module 'material-ui-icons/HdrWeak' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HdrWeak extends SvgIcon {}
}

declare module 'material-ui-icons/Headset' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Headset extends SvgIcon {}
}

declare module 'material-ui-icons/HeadsetMic' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HeadsetMic extends SvgIcon {}
}

declare module 'material-ui-icons/Healing' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Healing extends SvgIcon {}
}

declare module 'material-ui-icons/Hearing' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Hearing extends SvgIcon {}
}

declare module 'material-ui-icons/Help' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Help extends SvgIcon {}
}

declare module 'material-ui-icons/HelpOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HelpOutline extends SvgIcon {}
}

declare module 'material-ui-icons/Highlight' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Highlight extends SvgIcon {}
}

declare module 'material-ui-icons/HighlightOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HighlightOff extends SvgIcon {}
}

declare module 'material-ui-icons/HighQuality' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HighQuality extends SvgIcon {}
}

declare module 'material-ui-icons/History' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class History extends SvgIcon {}
}

declare module 'material-ui-icons/Home' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Home extends SvgIcon {}
}

declare module 'material-ui-icons/Hotel' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Hotel extends SvgIcon {}
}

declare module 'material-ui-icons/HotTub' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HotTub extends SvgIcon {}
}

declare module 'material-ui-icons/HourglassEmpty' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HourglassEmpty extends SvgIcon {}
}

declare module 'material-ui-icons/HourglassFull' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class HourglassFull extends SvgIcon {}
}

declare module 'material-ui-icons/Http' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Http extends SvgIcon {}
}

declare module 'material-ui-icons/Https' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Https extends SvgIcon {}
}

declare module 'material-ui-icons/Image' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Image extends SvgIcon {}
}

declare module 'material-ui-icons/ImageAspectRatio' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ImageAspectRatio extends SvgIcon {}
}

declare module 'material-ui-icons/ImportantDevices' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ImportantDevices extends SvgIcon {}
}

declare module 'material-ui-icons/ImportContacts' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ImportContacts extends SvgIcon {}
}

declare module 'material-ui-icons/ImportExport' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ImportExport extends SvgIcon {}
}

declare module 'material-ui-icons/Inbox' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Inbox extends SvgIcon {}
}

declare module 'material-ui-icons/IndeterminateCheckBox' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class IndeterminateCheckBox extends SvgIcon {}
}

declare module 'material-ui-icons/Info' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Info extends SvgIcon {}
}

declare module 'material-ui-icons/InfoOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class InfoOutline extends SvgIcon {}
}

declare module 'material-ui-icons/Input' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Input extends SvgIcon {}
}

declare module 'material-ui-icons/InsertChart' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class InsertChart extends SvgIcon {}
}

declare module 'material-ui-icons/InsertComment' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class InsertComment extends SvgIcon {}
}

declare module 'material-ui-icons/InsertDriveFile' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class InsertDriveFile extends SvgIcon {}
}

declare module 'material-ui-icons/InsertEmoticon' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class InsertEmoticon extends SvgIcon {}
}

declare module 'material-ui-icons/InsertInvitation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class InsertInvitation extends SvgIcon {}
}

declare module 'material-ui-icons/InsertLink' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class InsertLink extends SvgIcon {}
}

declare module 'material-ui-icons/InsertPhoto' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class InsertPhoto extends SvgIcon {}
}

declare module 'material-ui-icons/InvertColors' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class InvertColors extends SvgIcon {}
}

declare module 'material-ui-icons/InvertColorsOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class InvertColorsOff extends SvgIcon {}
}

declare module 'material-ui-icons/Iso' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Iso extends SvgIcon {}
}

declare module 'material-ui-icons/Keyboard' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Keyboard extends SvgIcon {}
}

declare module 'material-ui-icons/KeyboardArrowDown' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class KeyboardArrowDown extends SvgIcon {}
}

declare module 'material-ui-icons/KeyboardArrowLeft' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class KeyboardArrowLeft extends SvgIcon {}
}

declare module 'material-ui-icons/KeyboardArrowRight' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class KeyboardArrowRight extends SvgIcon {}
}

declare module 'material-ui-icons/KeyboardArrowUp' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class KeyboardArrowUp extends SvgIcon {}
}

declare module 'material-ui-icons/KeyboardBackspace' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class KeyboardBackspace extends SvgIcon {}
}

declare module 'material-ui-icons/KeyboardCapslock' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class KeyboardCapslock extends SvgIcon {}
}

declare module 'material-ui-icons/KeyboardHide' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class KeyboardHide extends SvgIcon {}
}

declare module 'material-ui-icons/KeyboardReturn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class KeyboardReturn extends SvgIcon {}
}

declare module 'material-ui-icons/KeyboardTab' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class KeyboardTab extends SvgIcon {}
}

declare module 'material-ui-icons/KeyboardVoice' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class KeyboardVoice extends SvgIcon {}
}

declare module 'material-ui-icons/Kitchen' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Kitchen extends SvgIcon {}
}

declare module 'material-ui-icons/Label' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Label extends SvgIcon {}
}

declare module 'material-ui-icons/LabelOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LabelOutline extends SvgIcon {}
}

declare module 'material-ui-icons/Landscape' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Landscape extends SvgIcon {}
}

declare module 'material-ui-icons/Language' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Language extends SvgIcon {}
}

declare module 'material-ui-icons/Laptop' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Laptop extends SvgIcon {}
}

declare module 'material-ui-icons/LaptopChromebook' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LaptopChromebook extends SvgIcon {}
}

declare module 'material-ui-icons/LaptopMac' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LaptopMac extends SvgIcon {}
}

declare module 'material-ui-icons/LaptopWindows' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LaptopWindows extends SvgIcon {}
}

declare module 'material-ui-icons/LastPage' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LastPage extends SvgIcon {}
}

declare module 'material-ui-icons/Launch' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Launch extends SvgIcon {}
}

declare module 'material-ui-icons/Layers' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Layers extends SvgIcon {}
}

declare module 'material-ui-icons/LayersClear' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LayersClear extends SvgIcon {}
}

declare module 'material-ui-icons/LeakAdd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LeakAdd extends SvgIcon {}
}

declare module 'material-ui-icons/LeakRemove' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LeakRemove extends SvgIcon {}
}

declare module 'material-ui-icons/Lens' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Lens extends SvgIcon {}
}

declare module 'material-ui-icons/LibraryAdd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LibraryAdd extends SvgIcon {}
}

declare module 'material-ui-icons/LibraryBooks' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LibraryBooks extends SvgIcon {}
}

declare module 'material-ui-icons/LibraryMusic' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LibraryMusic extends SvgIcon {}
}

declare module 'material-ui-icons/LightbulbOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LightbulbOutline extends SvgIcon {}
}

declare module 'material-ui-icons/LinearScale' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LinearScale extends SvgIcon {}
}

declare module 'material-ui-icons/LineStyle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LineStyle extends SvgIcon {}
}

declare module 'material-ui-icons/LineWeight' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LineWeight extends SvgIcon {}
}

declare module 'material-ui-icons/Link' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Link extends SvgIcon {}
}

declare module 'material-ui-icons/LinkedCamera' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LinkedCamera extends SvgIcon {}
}

declare module 'material-ui-icons/List' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class List extends SvgIcon {}
}

declare module 'material-ui-icons/LiveHelp' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LiveHelp extends SvgIcon {}
}

declare module 'material-ui-icons/LiveTv' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LiveTv extends SvgIcon {}
}

declare module 'material-ui-icons/LocalActivity' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalActivity extends SvgIcon {}
}

declare module 'material-ui-icons/LocalAirport' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalAirport extends SvgIcon {}
}

declare module 'material-ui-icons/LocalAtm' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalAtm extends SvgIcon {}
}

declare module 'material-ui-icons/LocalBar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalBar extends SvgIcon {}
}

declare module 'material-ui-icons/LocalCafe' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalCafe extends SvgIcon {}
}

declare module 'material-ui-icons/LocalCarWash' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalCarWash extends SvgIcon {}
}

declare module 'material-ui-icons/LocalConvenienceStore' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalConvenienceStore extends SvgIcon {}
}

declare module 'material-ui-icons/LocalDining' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalDining extends SvgIcon {}
}

declare module 'material-ui-icons/LocalDrink' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalDrink extends SvgIcon {}
}

declare module 'material-ui-icons/LocalFlorist' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalFlorist extends SvgIcon {}
}

declare module 'material-ui-icons/LocalGasStation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalGasStation extends SvgIcon {}
}

declare module 'material-ui-icons/LocalGroceryStore' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalGroceryStore extends SvgIcon {}
}

declare module 'material-ui-icons/LocalHospital' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalHospital extends SvgIcon {}
}

declare module 'material-ui-icons/LocalHotel' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalHotel extends SvgIcon {}
}

declare module 'material-ui-icons/LocalLaundryService' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalLaundryService extends SvgIcon {}
}

declare module 'material-ui-icons/LocalLibrary' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalLibrary extends SvgIcon {}
}

declare module 'material-ui-icons/LocalMall' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalMall extends SvgIcon {}
}

declare module 'material-ui-icons/LocalMovies' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalMovies extends SvgIcon {}
}

declare module 'material-ui-icons/LocalOffer' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalOffer extends SvgIcon {}
}

declare module 'material-ui-icons/LocalParking' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalParking extends SvgIcon {}
}

declare module 'material-ui-icons/LocalPharmacy' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalPharmacy extends SvgIcon {}
}

declare module 'material-ui-icons/LocalPhone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalPhone extends SvgIcon {}
}

declare module 'material-ui-icons/LocalPizza' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalPizza extends SvgIcon {}
}

declare module 'material-ui-icons/LocalPlay' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalPlay extends SvgIcon {}
}

declare module 'material-ui-icons/LocalPostOffice' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalPostOffice extends SvgIcon {}
}

declare module 'material-ui-icons/LocalPrintshop' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalPrintshop extends SvgIcon {}
}

declare module 'material-ui-icons/LocalSee' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalSee extends SvgIcon {}
}

declare module 'material-ui-icons/LocalShipping' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalShipping extends SvgIcon {}
}

declare module 'material-ui-icons/LocalTaxi' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocalTaxi extends SvgIcon {}
}

declare module 'material-ui-icons/LocationCity' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocationCity extends SvgIcon {}
}

declare module 'material-ui-icons/LocationDisabled' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocationDisabled extends SvgIcon {}
}

declare module 'material-ui-icons/LocationOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocationOff extends SvgIcon {}
}

declare module 'material-ui-icons/LocationOn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocationOn extends SvgIcon {}
}

declare module 'material-ui-icons/LocationSearching' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LocationSearching extends SvgIcon {}
}

declare module 'material-ui-icons/Lock' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Lock extends SvgIcon {}
}

declare module 'material-ui-icons/LockOpen' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LockOpen extends SvgIcon {}
}

declare module 'material-ui-icons/LockOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LockOutline extends SvgIcon {}
}

declare module 'material-ui-icons/Looks' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Looks extends SvgIcon {}
}

declare module 'material-ui-icons/Looks3' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Looks3 extends SvgIcon {}
}

declare module 'material-ui-icons/Looks4' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Looks4 extends SvgIcon {}
}

declare module 'material-ui-icons/Looks5' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Looks5 extends SvgIcon {}
}

declare module 'material-ui-icons/Looks6' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Looks6 extends SvgIcon {}
}

declare module 'material-ui-icons/LooksOne' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LooksOne extends SvgIcon {}
}

declare module 'material-ui-icons/LooksTwo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LooksTwo extends SvgIcon {}
}

declare module 'material-ui-icons/Loop' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Loop extends SvgIcon {}
}

declare module 'material-ui-icons/Loupe' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Loupe extends SvgIcon {}
}

declare module 'material-ui-icons/LowPriority' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class LowPriority extends SvgIcon {}
}

declare module 'material-ui-icons/Loyalty' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Loyalty extends SvgIcon {}
}

declare module 'material-ui-icons/Mail' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Mail extends SvgIcon {}
}

declare module 'material-ui-icons/MailOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MailOutline extends SvgIcon {}
}

declare module 'material-ui-icons/Map' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Map extends SvgIcon {}
}

declare module 'material-ui-icons/Markunread' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Markunread extends SvgIcon {}
}

declare module 'material-ui-icons/MarkunreadMailbox' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MarkunreadMailbox extends SvgIcon {}
}

declare module 'material-ui-icons/Memory' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Memory extends SvgIcon {}
}

declare module 'material-ui-icons/Menu' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Menu extends SvgIcon {}
}

declare module 'material-ui-icons/MergeType' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MergeType extends SvgIcon {}
}

declare module 'material-ui-icons/Message' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Message extends SvgIcon {}
}

declare module 'material-ui-icons/Mic' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Mic extends SvgIcon {}
}

declare module 'material-ui-icons/MicNone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MicNone extends SvgIcon {}
}

declare module 'material-ui-icons/MicOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MicOff extends SvgIcon {}
}

declare module 'material-ui-icons/Mms' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Mms extends SvgIcon {}
}

declare module 'material-ui-icons/ModeComment' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ModeComment extends SvgIcon {}
}

declare module 'material-ui-icons/ModeEdit' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ModeEdit extends SvgIcon {}
}

declare module 'material-ui-icons/MonetizationOn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MonetizationOn extends SvgIcon {}
}

declare module 'material-ui-icons/MoneyOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MoneyOff extends SvgIcon {}
}

declare module 'material-ui-icons/MonochromePhotos' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MonochromePhotos extends SvgIcon {}
}

declare module 'material-ui-icons/Mood' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Mood extends SvgIcon {}
}

declare module 'material-ui-icons/MoodBad' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MoodBad extends SvgIcon {}
}

declare module 'material-ui-icons/More' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class More extends SvgIcon {}
}

declare module 'material-ui-icons/MoreHoriz' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MoreHoriz extends SvgIcon {}
}

declare module 'material-ui-icons/MoreVert' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MoreVert extends SvgIcon {}
}

declare module 'material-ui-icons/Motorcycle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Motorcycle extends SvgIcon {}
}

declare module 'material-ui-icons/Mouse' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Mouse extends SvgIcon {}
}

declare module 'material-ui-icons/MoveToInbox' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MoveToInbox extends SvgIcon {}
}

declare module 'material-ui-icons/Movie' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Movie extends SvgIcon {}
}

declare module 'material-ui-icons/MovieCreation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MovieCreation extends SvgIcon {}
}

declare module 'material-ui-icons/MovieFilter' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MovieFilter extends SvgIcon {}
}

declare module 'material-ui-icons/MultilineChart' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MultilineChart extends SvgIcon {}
}

declare module 'material-ui-icons/MusicNote' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MusicNote extends SvgIcon {}
}

declare module 'material-ui-icons/MusicVideo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MusicVideo extends SvgIcon {}
}

declare module 'material-ui-icons/MyLocation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class MyLocation extends SvgIcon {}
}

declare module 'material-ui-icons/Nature' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Nature extends SvgIcon {}
}

declare module 'material-ui-icons/NaturePeople' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NaturePeople extends SvgIcon {}
}

declare module 'material-ui-icons/NavigateBefore' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NavigateBefore extends SvgIcon {}
}

declare module 'material-ui-icons/NavigateNext' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NavigateNext extends SvgIcon {}
}

declare module 'material-ui-icons/Navigation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Navigation extends SvgIcon {}
}

declare module 'material-ui-icons/NearMe' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NearMe extends SvgIcon {}
}

declare module 'material-ui-icons/NetworkCell' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NetworkCell extends SvgIcon {}
}

declare module 'material-ui-icons/NetworkCheck' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NetworkCheck extends SvgIcon {}
}

declare module 'material-ui-icons/NetworkLocked' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NetworkLocked extends SvgIcon {}
}

declare module 'material-ui-icons/NetworkWifi' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NetworkWifi extends SvgIcon {}
}

declare module 'material-ui-icons/NewReleases' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NewReleases extends SvgIcon {}
}

declare module 'material-ui-icons/NextWeek' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NextWeek extends SvgIcon {}
}

declare module 'material-ui-icons/Nfc' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Nfc extends SvgIcon {}
}

declare module 'material-ui-icons/NoEncryption' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NoEncryption extends SvgIcon {}
}

declare module 'material-ui-icons/NoSim' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NoSim extends SvgIcon {}
}

declare module 'material-ui-icons/Note' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Note extends SvgIcon {}
}

declare module 'material-ui-icons/NoteAdd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NoteAdd extends SvgIcon {}
}

declare module 'material-ui-icons/Notifications' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Notifications extends SvgIcon {}
}

declare module 'material-ui-icons/NotificationsActive' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NotificationsActive extends SvgIcon {}
}

declare module 'material-ui-icons/NotificationsNone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NotificationsNone extends SvgIcon {}
}

declare module 'material-ui-icons/NotificationsOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NotificationsOff extends SvgIcon {}
}

declare module 'material-ui-icons/NotificationsPaused' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NotificationsPaused extends SvgIcon {}
}

declare module 'material-ui-icons/NotInterested' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class NotInterested extends SvgIcon {}
}

declare module 'material-ui-icons/OfflinePin' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class OfflinePin extends SvgIcon {}
}

declare module 'material-ui-icons/OndemandVideo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class OndemandVideo extends SvgIcon {}
}

declare module 'material-ui-icons/Opacity' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Opacity extends SvgIcon {}
}

declare module 'material-ui-icons/OpenInBrowser' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class OpenInBrowser extends SvgIcon {}
}

declare module 'material-ui-icons/OpenInNew' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class OpenInNew extends SvgIcon {}
}

declare module 'material-ui-icons/OpenWith' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class OpenWith extends SvgIcon {}
}

declare module 'material-ui-icons/Pages' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Pages extends SvgIcon {}
}

declare module 'material-ui-icons/Pageview' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Pageview extends SvgIcon {}
}

declare module 'material-ui-icons/Palette' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Palette extends SvgIcon {}
}

declare module 'material-ui-icons/Panorama' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Panorama extends SvgIcon {}
}

declare module 'material-ui-icons/PanoramaFishEye' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PanoramaFishEye extends SvgIcon {}
}

declare module 'material-ui-icons/PanoramaHorizontal' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PanoramaHorizontal extends SvgIcon {}
}

declare module 'material-ui-icons/PanoramaVertical' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PanoramaVertical extends SvgIcon {}
}

declare module 'material-ui-icons/PanoramaWideAngle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PanoramaWideAngle extends SvgIcon {}
}

declare module 'material-ui-icons/PanTool' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PanTool extends SvgIcon {}
}

declare module 'material-ui-icons/PartyMode' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PartyMode extends SvgIcon {}
}

declare module 'material-ui-icons/Pause' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Pause extends SvgIcon {}
}

declare module 'material-ui-icons/PauseCircleFilled' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PauseCircleFilled extends SvgIcon {}
}

declare module 'material-ui-icons/PauseCircleOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PauseCircleOutline extends SvgIcon {}
}

declare module 'material-ui-icons/Payment' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Payment extends SvgIcon {}
}

declare module 'material-ui-icons/People' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class People extends SvgIcon {}
}

declare module 'material-ui-icons/PeopleOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PeopleOutline extends SvgIcon {}
}

declare module 'material-ui-icons/PermCameraMic' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PermCameraMic extends SvgIcon {}
}

declare module 'material-ui-icons/PermContactCalendar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PermContactCalendar extends SvgIcon {}
}

declare module 'material-ui-icons/PermDataSetting' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PermDataSetting extends SvgIcon {}
}

declare module 'material-ui-icons/PermDeviceInformation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PermDeviceInformation extends SvgIcon {}
}

declare module 'material-ui-icons/PermIdentity' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PermIdentity extends SvgIcon {}
}

declare module 'material-ui-icons/PermMedia' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PermMedia extends SvgIcon {}
}

declare module 'material-ui-icons/PermPhoneMsg' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PermPhoneMsg extends SvgIcon {}
}

declare module 'material-ui-icons/PermScanWifi' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PermScanWifi extends SvgIcon {}
}

declare module 'material-ui-icons/Person' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Person extends SvgIcon {}
}

declare module 'material-ui-icons/PersonAdd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PersonAdd extends SvgIcon {}
}

declare module 'material-ui-icons/PersonalVideo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PersonalVideo extends SvgIcon {}
}

declare module 'material-ui-icons/PersonOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PersonOutline extends SvgIcon {}
}

declare module 'material-ui-icons/PersonPin' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PersonPin extends SvgIcon {}
}

declare module 'material-ui-icons/PersonPinCircle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PersonPinCircle extends SvgIcon {}
}

declare module 'material-ui-icons/Pets' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Pets extends SvgIcon {}
}

declare module 'material-ui-icons/Phone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Phone extends SvgIcon {}
}

declare module 'material-ui-icons/PhoneAndroid' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhoneAndroid extends SvgIcon {}
}

declare module 'material-ui-icons/PhoneBluetoothSpeaker' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhoneBluetoothSpeaker extends SvgIcon {}
}

declare module 'material-ui-icons/PhoneForwarded' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhoneForwarded extends SvgIcon {}
}

declare module 'material-ui-icons/PhoneInTalk' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhoneInTalk extends SvgIcon {}
}

declare module 'material-ui-icons/PhoneIphone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhoneIphone extends SvgIcon {}
}

declare module 'material-ui-icons/Phonelink' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Phonelink extends SvgIcon {}
}

declare module 'material-ui-icons/PhonelinkErase' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhonelinkErase extends SvgIcon {}
}

declare module 'material-ui-icons/PhonelinkLock' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhonelinkLock extends SvgIcon {}
}

declare module 'material-ui-icons/PhonelinkOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhonelinkOff extends SvgIcon {}
}

declare module 'material-ui-icons/PhonelinkRing' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhonelinkRing extends SvgIcon {}
}

declare module 'material-ui-icons/PhonelinkSetup' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhonelinkSetup extends SvgIcon {}
}

declare module 'material-ui-icons/PhoneLocked' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhoneLocked extends SvgIcon {}
}

declare module 'material-ui-icons/PhoneMissed' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhoneMissed extends SvgIcon {}
}

declare module 'material-ui-icons/PhonePaused' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhonePaused extends SvgIcon {}
}

declare module 'material-ui-icons/Photo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Photo extends SvgIcon {}
}

declare module 'material-ui-icons/PhotoAlbum' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhotoAlbum extends SvgIcon {}
}

declare module 'material-ui-icons/PhotoCamera' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhotoCamera extends SvgIcon {}
}

declare module 'material-ui-icons/PhotoFilter' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhotoFilter extends SvgIcon {}
}

declare module 'material-ui-icons/PhotoLibrary' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhotoLibrary extends SvgIcon {}
}

declare module 'material-ui-icons/PhotoSizeSelectActual' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhotoSizeSelectActual extends SvgIcon {}
}

declare module 'material-ui-icons/PhotoSizeSelectLarge' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhotoSizeSelectLarge extends SvgIcon {}
}

declare module 'material-ui-icons/PhotoSizeSelectSmall' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PhotoSizeSelectSmall extends SvgIcon {}
}

declare module 'material-ui-icons/PictureAsPdf' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PictureAsPdf extends SvgIcon {}
}

declare module 'material-ui-icons/PictureInPicture' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PictureInPicture extends SvgIcon {}
}

declare module 'material-ui-icons/PictureInPictureAlt' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PictureInPictureAlt extends SvgIcon {}
}

declare module 'material-ui-icons/PieChart' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PieChart extends SvgIcon {}
}

declare module 'material-ui-icons/PieChartOutlined' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PieChartOutlined extends SvgIcon {}
}

declare module 'material-ui-icons/PinDrop' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PinDrop extends SvgIcon {}
}

declare module 'material-ui-icons/Place' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Place extends SvgIcon {}
}

declare module 'material-ui-icons/PlayArrow' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PlayArrow extends SvgIcon {}
}

declare module 'material-ui-icons/PlayCircleFilled' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PlayCircleFilled extends SvgIcon {}
}

declare module 'material-ui-icons/PlayCircleOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PlayCircleOutline extends SvgIcon {}
}

declare module 'material-ui-icons/PlayForWork' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PlayForWork extends SvgIcon {}
}

declare module 'material-ui-icons/PlaylistAdd' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PlaylistAdd extends SvgIcon {}
}

declare module 'material-ui-icons/PlaylistAddCheck' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PlaylistAddCheck extends SvgIcon {}
}

declare module 'material-ui-icons/PlaylistPlay' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PlaylistPlay extends SvgIcon {}
}

declare module 'material-ui-icons/PlusOne' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PlusOne extends SvgIcon {}
}

declare module 'material-ui-icons/Poll' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Poll extends SvgIcon {}
}

declare module 'material-ui-icons/Polymer' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Polymer extends SvgIcon {}
}

declare module 'material-ui-icons/Pool' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Pool extends SvgIcon {}
}

declare module 'material-ui-icons/PortableWifiOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PortableWifiOff extends SvgIcon {}
}

declare module 'material-ui-icons/Portrait' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Portrait extends SvgIcon {}
}

declare module 'material-ui-icons/Power' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Power extends SvgIcon {}
}

declare module 'material-ui-icons/PowerInput' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PowerInput extends SvgIcon {}
}

declare module 'material-ui-icons/PowerSettingsNew' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PowerSettingsNew extends SvgIcon {}
}

declare module 'material-ui-icons/PregnantWoman' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PregnantWoman extends SvgIcon {}
}

declare module 'material-ui-icons/PresentToAll' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PresentToAll extends SvgIcon {}
}

declare module 'material-ui-icons/Print' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Print extends SvgIcon {}
}

declare module 'material-ui-icons/PriorityHigh' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class PriorityHigh extends SvgIcon {}
}

declare module 'material-ui-icons/Public' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Public extends SvgIcon {}
}

declare module 'material-ui-icons/Publish' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Publish extends SvgIcon {}
}

declare module 'material-ui-icons/QueryBuilder' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class QueryBuilder extends SvgIcon {}
}

declare module 'material-ui-icons/QuestionAnswer' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class QuestionAnswer extends SvgIcon {}
}

declare module 'material-ui-icons/Queue' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Queue extends SvgIcon {}
}

declare module 'material-ui-icons/QueueMusic' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class QueueMusic extends SvgIcon {}
}

declare module 'material-ui-icons/QueuePlayNext' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class QueuePlayNext extends SvgIcon {}
}

declare module 'material-ui-icons/Radio' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Radio extends SvgIcon {}
}

declare module 'material-ui-icons/RadioButtonChecked' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RadioButtonChecked extends SvgIcon {}
}

declare module 'material-ui-icons/RadioButtonUnchecked' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RadioButtonUnchecked extends SvgIcon {}
}

declare module 'material-ui-icons/RateReview' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RateReview extends SvgIcon {}
}

declare module 'material-ui-icons/Receipt' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Receipt extends SvgIcon {}
}

declare module 'material-ui-icons/RecentActors' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RecentActors extends SvgIcon {}
}

declare module 'material-ui-icons/RecordVoiceOver' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RecordVoiceOver extends SvgIcon {}
}

declare module 'material-ui-icons/Redeem' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Redeem extends SvgIcon {}
}

declare module 'material-ui-icons/Redo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Redo extends SvgIcon {}
}

declare module 'material-ui-icons/Refresh' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Refresh extends SvgIcon {}
}

declare module 'material-ui-icons/Remove' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Remove extends SvgIcon {}
}

declare module 'material-ui-icons/RemoveCircle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RemoveCircle extends SvgIcon {}
}

declare module 'material-ui-icons/RemoveCircleOutline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RemoveCircleOutline extends SvgIcon {}
}

declare module 'material-ui-icons/RemoveFromQueue' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RemoveFromQueue extends SvgIcon {}
}

declare module 'material-ui-icons/RemoveRedEye' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RemoveRedEye extends SvgIcon {}
}

declare module 'material-ui-icons/RemoveShoppingCart' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RemoveShoppingCart extends SvgIcon {}
}

declare module 'material-ui-icons/Reorder' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Reorder extends SvgIcon {}
}

declare module 'material-ui-icons/Repeat' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Repeat extends SvgIcon {}
}

declare module 'material-ui-icons/RepeatOne' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RepeatOne extends SvgIcon {}
}

declare module 'material-ui-icons/Replay' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Replay extends SvgIcon {}
}

declare module 'material-ui-icons/Replay10' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Replay10 extends SvgIcon {}
}

declare module 'material-ui-icons/Replay30' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Replay30 extends SvgIcon {}
}

declare module 'material-ui-icons/Replay5' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Replay5 extends SvgIcon {}
}

declare module 'material-ui-icons/Reply' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Reply extends SvgIcon {}
}

declare module 'material-ui-icons/ReplyAll' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ReplyAll extends SvgIcon {}
}

declare module 'material-ui-icons/Report' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Report extends SvgIcon {}
}

declare module 'material-ui-icons/ReportProblem' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ReportProblem extends SvgIcon {}
}

declare module 'material-ui-icons/Restaurant' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Restaurant extends SvgIcon {}
}

declare module 'material-ui-icons/RestaurantMenu' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RestaurantMenu extends SvgIcon {}
}

declare module 'material-ui-icons/Restore' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Restore extends SvgIcon {}
}

declare module 'material-ui-icons/RestorePage' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RestorePage extends SvgIcon {}
}

declare module 'material-ui-icons/RingVolume' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RingVolume extends SvgIcon {}
}

declare module 'material-ui-icons/Room' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Room extends SvgIcon {}
}

declare module 'material-ui-icons/RoomService' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RoomService extends SvgIcon {}
}

declare module 'material-ui-icons/Rotate90DegreesCcw' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Rotate90DegreesCcw extends SvgIcon {}
}

declare module 'material-ui-icons/RotateLeft' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RotateLeft extends SvgIcon {}
}

declare module 'material-ui-icons/RotateRight' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RotateRight extends SvgIcon {}
}

declare module 'material-ui-icons/RoundedCorner' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RoundedCorner extends SvgIcon {}
}

declare module 'material-ui-icons/Router' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Router extends SvgIcon {}
}

declare module 'material-ui-icons/Rowing' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Rowing extends SvgIcon {}
}

declare module 'material-ui-icons/RssFeed' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RssFeed extends SvgIcon {}
}

declare module 'material-ui-icons/RvHookup' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class RvHookup extends SvgIcon {}
}

declare module 'material-ui-icons/Satellite' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Satellite extends SvgIcon {}
}

declare module 'material-ui-icons/Save' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Save extends SvgIcon {}
}

declare module 'material-ui-icons/Scanner' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Scanner extends SvgIcon {}
}

declare module 'material-ui-icons/Schedule' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Schedule extends SvgIcon {}
}

declare module 'material-ui-icons/School' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class School extends SvgIcon {}
}

declare module 'material-ui-icons/ScreenLockLandscape' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ScreenLockLandscape extends SvgIcon {}
}

declare module 'material-ui-icons/ScreenLockPortrait' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ScreenLockPortrait extends SvgIcon {}
}

declare module 'material-ui-icons/ScreenLockRotation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ScreenLockRotation extends SvgIcon {}
}

declare module 'material-ui-icons/ScreenRotation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ScreenRotation extends SvgIcon {}
}

declare module 'material-ui-icons/ScreenShare' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ScreenShare extends SvgIcon {}
}

declare module 'material-ui-icons/SdCard' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SdCard extends SvgIcon {}
}

declare module 'material-ui-icons/SdStorage' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SdStorage extends SvgIcon {}
}

declare module 'material-ui-icons/Search' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Search extends SvgIcon {}
}

declare module 'material-ui-icons/Security' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Security extends SvgIcon {}
}

declare module 'material-ui-icons/SelectAll' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SelectAll extends SvgIcon {}
}

declare module 'material-ui-icons/Send' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Send extends SvgIcon {}
}

declare module 'material-ui-icons/SentimentDissatisfied' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SentimentDissatisfied extends SvgIcon {}
}

declare module 'material-ui-icons/SentimentNeutral' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SentimentNeutral extends SvgIcon {}
}

declare module 'material-ui-icons/SentimentSatisfied' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SentimentSatisfied extends SvgIcon {}
}

declare module 'material-ui-icons/SentimentVeryDissatisfied' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SentimentVeryDissatisfied extends SvgIcon {}
}

declare module 'material-ui-icons/SentimentVerySatisfied' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SentimentVerySatisfied extends SvgIcon {}
}

declare module 'material-ui-icons/Settings' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Settings extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsApplications' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsApplications extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsBackupRestore' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsBackupRestore extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsBluetooth' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsBluetooth extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsBrightness' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsBrightness extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsCell' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsCell extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsEthernet' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsEthernet extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsInputAntenna' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsInputAntenna extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsInputComponent' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsInputComponent extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsInputComposite' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsInputComposite extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsInputHdmi' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsInputHdmi extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsInputSvideo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsInputSvideo extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsOverscan' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsOverscan extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsPhone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsPhone extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsPower' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsPower extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsRemote' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsRemote extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsSystemDaydream' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsSystemDaydream extends SvgIcon {}
}

declare module 'material-ui-icons/SettingsVoice' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SettingsVoice extends SvgIcon {}
}

declare module 'material-ui-icons/Share' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Share extends SvgIcon {}
}

declare module 'material-ui-icons/Shop' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Shop extends SvgIcon {}
}

declare module 'material-ui-icons/ShoppingBasket' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ShoppingBasket extends SvgIcon {}
}

declare module 'material-ui-icons/ShoppingCart' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ShoppingCart extends SvgIcon {}
}

declare module 'material-ui-icons/ShopTwo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ShopTwo extends SvgIcon {}
}

declare module 'material-ui-icons/ShortText' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ShortText extends SvgIcon {}
}

declare module 'material-ui-icons/ShowChart' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ShowChart extends SvgIcon {}
}

declare module 'material-ui-icons/Shuffle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Shuffle extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellular0Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellular0Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellular1Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellular1Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellular2Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellular2Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellular3Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellular3Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellular4Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellular4Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellularConnectedNoInternet0Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellularConnectedNoInternet0Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellularConnectedNoInternet1Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellularConnectedNoInternet1Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellularConnectedNoInternet2Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellularConnectedNoInternet2Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellularConnectedNoInternet3Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellularConnectedNoInternet3Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellularConnectedNoInternet4Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellularConnectedNoInternet4Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellularNoSim' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellularNoSim extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellularNull' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellularNull extends SvgIcon {}
}

declare module 'material-ui-icons/SignalCellularOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalCellularOff extends SvgIcon {}
}

declare module 'material-ui-icons/SignalWifi0Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalWifi0Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalWifi1Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalWifi1Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalWifi1BarLock' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalWifi1BarLock extends SvgIcon {}
}

declare module 'material-ui-icons/SignalWifi2Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalWifi2Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalWifi2BarLock' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalWifi2BarLock extends SvgIcon {}
}

declare module 'material-ui-icons/SignalWifi3Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalWifi3Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalWifi3BarLock' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalWifi3BarLock extends SvgIcon {}
}

declare module 'material-ui-icons/SignalWifi4Bar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalWifi4Bar extends SvgIcon {}
}

declare module 'material-ui-icons/SignalWifi4BarLock' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalWifi4BarLock extends SvgIcon {}
}

declare module 'material-ui-icons/SignalWifiOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SignalWifiOff extends SvgIcon {}
}

declare module 'material-ui-icons/SimCard' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SimCard extends SvgIcon {}
}

declare module 'material-ui-icons/SimCardAlert' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SimCardAlert extends SvgIcon {}
}

declare module 'material-ui-icons/SkipNext' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SkipNext extends SvgIcon {}
}

declare module 'material-ui-icons/SkipPrevious' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SkipPrevious extends SvgIcon {}
}

declare module 'material-ui-icons/Slideshow' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Slideshow extends SvgIcon {}
}

declare module 'material-ui-icons/SlowMotionVideo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SlowMotionVideo extends SvgIcon {}
}

declare module 'material-ui-icons/Smartphone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Smartphone extends SvgIcon {}
}

declare module 'material-ui-icons/SmokeFree' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SmokeFree extends SvgIcon {}
}

declare module 'material-ui-icons/SmokingRooms' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SmokingRooms extends SvgIcon {}
}

declare module 'material-ui-icons/Sms' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Sms extends SvgIcon {}
}

declare module 'material-ui-icons/SmsFailed' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SmsFailed extends SvgIcon {}
}

declare module 'material-ui-icons/Snooze' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Snooze extends SvgIcon {}
}

declare module 'material-ui-icons/Sort' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Sort extends SvgIcon {}
}

declare module 'material-ui-icons/SortByAlpha' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SortByAlpha extends SvgIcon {}
}

declare module 'material-ui-icons/Spa' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Spa extends SvgIcon {}
}

declare module 'material-ui-icons/SpaceBar' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SpaceBar extends SvgIcon {}
}

declare module 'material-ui-icons/Speaker' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Speaker extends SvgIcon {}
}

declare module 'material-ui-icons/SpeakerGroup' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SpeakerGroup extends SvgIcon {}
}

declare module 'material-ui-icons/SpeakerNotes' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SpeakerNotes extends SvgIcon {}
}

declare module 'material-ui-icons/SpeakerNotesOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SpeakerNotesOff extends SvgIcon {}
}

declare module 'material-ui-icons/SpeakerPhone' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SpeakerPhone extends SvgIcon {}
}

declare module 'material-ui-icons/Spellcheck' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Spellcheck extends SvgIcon {}
}

declare module 'material-ui-icons/Star' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Star extends SvgIcon {}
}

declare module 'material-ui-icons/StarBorder' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class StarBorder extends SvgIcon {}
}

declare module 'material-ui-icons/StarHalf' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class StarHalf extends SvgIcon {}
}

declare module 'material-ui-icons/Stars' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Stars extends SvgIcon {}
}

declare module 'material-ui-icons/StayCurrentLandscape' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class StayCurrentLandscape extends SvgIcon {}
}

declare module 'material-ui-icons/StayCurrentPortrait' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class StayCurrentPortrait extends SvgIcon {}
}

declare module 'material-ui-icons/StayPrimaryLandscape' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class StayPrimaryLandscape extends SvgIcon {}
}

declare module 'material-ui-icons/StayPrimaryPortrait' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class StayPrimaryPortrait extends SvgIcon {}
}

declare module 'material-ui-icons/Stop' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Stop extends SvgIcon {}
}

declare module 'material-ui-icons/StopScreenShare' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class StopScreenShare extends SvgIcon {}
}

declare module 'material-ui-icons/Storage' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Storage extends SvgIcon {}
}

declare module 'material-ui-icons/Store' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Store extends SvgIcon {}
}

declare module 'material-ui-icons/StoreMallDirectory' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class StoreMallDirectory extends SvgIcon {}
}

declare module 'material-ui-icons/Straighten' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Straighten extends SvgIcon {}
}

declare module 'material-ui-icons/Streetview' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Streetview extends SvgIcon {}
}

declare module 'material-ui-icons/StrikethroughS' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class StrikethroughS extends SvgIcon {}
}

declare module 'material-ui-icons/Style' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Style extends SvgIcon {}
}

declare module 'material-ui-icons/SubdirectoryArrowLeft' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SubdirectoryArrowLeft extends SvgIcon {}
}

declare module 'material-ui-icons/SubdirectoryArrowRight' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SubdirectoryArrowRight extends SvgIcon {}
}

declare module 'material-ui-icons/Subject' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Subject extends SvgIcon {}
}

declare module 'material-ui-icons/Subscriptions' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Subscriptions extends SvgIcon {}
}

declare module 'material-ui-icons/Subtitles' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Subtitles extends SvgIcon {}
}

declare module 'material-ui-icons/Subway' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Subway extends SvgIcon {}
}

declare module 'material-ui-icons/SupervisorAccount' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SupervisorAccount extends SvgIcon {}
}

declare module 'material-ui-icons/SurroundSound' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SurroundSound extends SvgIcon {}
}

declare module 'material-ui-icons/SwapCalls' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SwapCalls extends SvgIcon {}
}

declare module 'material-ui-icons/SwapHoriz' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SwapHoriz extends SvgIcon {}
}

declare module 'material-ui-icons/SwapVert' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SwapVert extends SvgIcon {}
}

declare module 'material-ui-icons/SwapVerticalCircle' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SwapVerticalCircle extends SvgIcon {}
}

declare module 'material-ui-icons/SwitchCamera' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SwitchCamera extends SvgIcon {}
}

declare module 'material-ui-icons/SwitchVideo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SwitchVideo extends SvgIcon {}
}

declare module 'material-ui-icons/Sync' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Sync extends SvgIcon {}
}

declare module 'material-ui-icons/SyncDisabled' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SyncDisabled extends SvgIcon {}
}

declare module 'material-ui-icons/SyncProblem' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SyncProblem extends SvgIcon {}
}

declare module 'material-ui-icons/SystemUpdate' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SystemUpdate extends SvgIcon {}
}

declare module 'material-ui-icons/SystemUpdateAlt' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class SystemUpdateAlt extends SvgIcon {}
}

declare module 'material-ui-icons/Tab' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Tab extends SvgIcon {}
}

declare module 'material-ui-icons/Tablet' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Tablet extends SvgIcon {}
}

declare module 'material-ui-icons/TabletAndroid' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TabletAndroid extends SvgIcon {}
}

declare module 'material-ui-icons/TabletMac' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TabletMac extends SvgIcon {}
}

declare module 'material-ui-icons/TabUnselected' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TabUnselected extends SvgIcon {}
}

declare module 'material-ui-icons/TagFaces' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TagFaces extends SvgIcon {}
}

declare module 'material-ui-icons/TapAndPlay' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TapAndPlay extends SvgIcon {}
}

declare module 'material-ui-icons/Terrain' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Terrain extends SvgIcon {}
}

declare module 'material-ui-icons/TextFields' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TextFields extends SvgIcon {}
}

declare module 'material-ui-icons/TextFormat' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TextFormat extends SvgIcon {}
}

declare module 'material-ui-icons/Textsms' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Textsms extends SvgIcon {}
}

declare module 'material-ui-icons/Texture' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Texture extends SvgIcon {}
}

declare module 'material-ui-icons/Theaters' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Theaters extends SvgIcon {}
}

declare module 'material-ui-icons/ThreeDRotation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ThreeDRotation extends SvgIcon {}
}

declare module 'material-ui-icons/ThumbDown' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ThumbDown extends SvgIcon {}
}

declare module 'material-ui-icons/ThumbsUpDown' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ThumbsUpDown extends SvgIcon {}
}

declare module 'material-ui-icons/ThumbUp' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ThumbUp extends SvgIcon {}
}

declare module 'material-ui-icons/Timelapse' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Timelapse extends SvgIcon {}
}

declare module 'material-ui-icons/Timeline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Timeline extends SvgIcon {}
}

declare module 'material-ui-icons/Timer' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Timer extends SvgIcon {}
}

declare module 'material-ui-icons/Timer10' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Timer10 extends SvgIcon {}
}

declare module 'material-ui-icons/Timer3' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Timer3 extends SvgIcon {}
}

declare module 'material-ui-icons/TimerOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TimerOff extends SvgIcon {}
}

declare module 'material-ui-icons/TimeToLeave' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TimeToLeave extends SvgIcon {}
}

declare module 'material-ui-icons/Title' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Title extends SvgIcon {}
}

declare module 'material-ui-icons/Toc' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Toc extends SvgIcon {}
}

declare module 'material-ui-icons/Today' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Today extends SvgIcon {}
}

declare module 'material-ui-icons/Toll' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Toll extends SvgIcon {}
}

declare module 'material-ui-icons/Tonality' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Tonality extends SvgIcon {}
}

declare module 'material-ui-icons/TouchApp' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TouchApp extends SvgIcon {}
}

declare module 'material-ui-icons/Toys' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Toys extends SvgIcon {}
}

declare module 'material-ui-icons/TrackChanges' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TrackChanges extends SvgIcon {}
}

declare module 'material-ui-icons/Traffic' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Traffic extends SvgIcon {}
}

declare module 'material-ui-icons/Train' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Train extends SvgIcon {}
}

declare module 'material-ui-icons/Tram' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Tram extends SvgIcon {}
}

declare module 'material-ui-icons/TransferWithinAStation' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TransferWithinAStation extends SvgIcon {}
}

declare module 'material-ui-icons/Transform' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Transform extends SvgIcon {}
}

declare module 'material-ui-icons/Translate' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Translate extends SvgIcon {}
}

declare module 'material-ui-icons/TrendingDown' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TrendingDown extends SvgIcon {}
}

declare module 'material-ui-icons/TrendingFlat' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TrendingFlat extends SvgIcon {}
}

declare module 'material-ui-icons/TrendingUp' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TrendingUp extends SvgIcon {}
}

declare module 'material-ui-icons/Tune' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Tune extends SvgIcon {}
}

declare module 'material-ui-icons/TurnedIn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TurnedIn extends SvgIcon {}
}

declare module 'material-ui-icons/TurnedInNot' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class TurnedInNot extends SvgIcon {}
}

declare module 'material-ui-icons/Tv' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Tv extends SvgIcon {}
}

declare module 'material-ui-icons/Unarchive' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Unarchive extends SvgIcon {}
}

declare module 'material-ui-icons/Undo' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Undo extends SvgIcon {}
}

declare module 'material-ui-icons/UnfoldLess' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class UnfoldLess extends SvgIcon {}
}

declare module 'material-ui-icons/UnfoldMore' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class UnfoldMore extends SvgIcon {}
}

declare module 'material-ui-icons/Update' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Update extends SvgIcon {}
}

declare module 'material-ui-icons/Usb' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Usb extends SvgIcon {}
}

declare module 'material-ui-icons/VerifiedUser' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VerifiedUser extends SvgIcon {}
}

declare module 'material-ui-icons/VerticalAlignBottom' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VerticalAlignBottom extends SvgIcon {}
}

declare module 'material-ui-icons/VerticalAlignCenter' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VerticalAlignCenter extends SvgIcon {}
}

declare module 'material-ui-icons/VerticalAlignTop' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VerticalAlignTop extends SvgIcon {}
}

declare module 'material-ui-icons/Vibration' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Vibration extends SvgIcon {}
}

declare module 'material-ui-icons/VideoCall' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VideoCall extends SvgIcon {}
}

declare module 'material-ui-icons/Videocam' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Videocam extends SvgIcon {}
}

declare module 'material-ui-icons/VideocamOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VideocamOff extends SvgIcon {}
}

declare module 'material-ui-icons/VideogameAsset' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VideogameAsset extends SvgIcon {}
}

declare module 'material-ui-icons/VideoLabel' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VideoLabel extends SvgIcon {}
}

declare module 'material-ui-icons/VideoLibrary' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VideoLibrary extends SvgIcon {}
}

declare module 'material-ui-icons/ViewAgenda' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewAgenda extends SvgIcon {}
}

declare module 'material-ui-icons/ViewArray' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewArray extends SvgIcon {}
}

declare module 'material-ui-icons/ViewCarousel' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewCarousel extends SvgIcon {}
}

declare module 'material-ui-icons/ViewColumn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewColumn extends SvgIcon {}
}

declare module 'material-ui-icons/ViewComfy' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewComfy extends SvgIcon {}
}

declare module 'material-ui-icons/ViewCompact' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewCompact extends SvgIcon {}
}

declare module 'material-ui-icons/ViewDay' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewDay extends SvgIcon {}
}

declare module 'material-ui-icons/ViewHeadline' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewHeadline extends SvgIcon {}
}

declare module 'material-ui-icons/ViewList' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewList extends SvgIcon {}
}

declare module 'material-ui-icons/ViewModule' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewModule extends SvgIcon {}
}

declare module 'material-ui-icons/ViewQuilt' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewQuilt extends SvgIcon {}
}

declare module 'material-ui-icons/ViewStream' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewStream extends SvgIcon {}
}

declare module 'material-ui-icons/ViewWeek' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ViewWeek extends SvgIcon {}
}

declare module 'material-ui-icons/Vignette' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Vignette extends SvgIcon {}
}

declare module 'material-ui-icons/Visibility' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Visibility extends SvgIcon {}
}

declare module 'material-ui-icons/VisibilityOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VisibilityOff extends SvgIcon {}
}

declare module 'material-ui-icons/VoiceChat' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VoiceChat extends SvgIcon {}
}

declare module 'material-ui-icons/Voicemail' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Voicemail extends SvgIcon {}
}

declare module 'material-ui-icons/VolumeDown' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VolumeDown extends SvgIcon {}
}

declare module 'material-ui-icons/VolumeMute' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VolumeMute extends SvgIcon {}
}

declare module 'material-ui-icons/VolumeOff' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VolumeOff extends SvgIcon {}
}

declare module 'material-ui-icons/VolumeUp' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VolumeUp extends SvgIcon {}
}

declare module 'material-ui-icons/VpnKey' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VpnKey extends SvgIcon {}
}

declare module 'material-ui-icons/VpnLock' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class VpnLock extends SvgIcon {}
}

declare module 'material-ui-icons/Wallpaper' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Wallpaper extends SvgIcon {}
}

declare module 'material-ui-icons/Warning' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Warning extends SvgIcon {}
}

declare module 'material-ui-icons/Watch' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Watch extends SvgIcon {}
}

declare module 'material-ui-icons/WatchLater' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class WatchLater extends SvgIcon {}
}

declare module 'material-ui-icons/WbAuto' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class WbAuto extends SvgIcon {}
}

declare module 'material-ui-icons/WbCloudy' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class WbCloudy extends SvgIcon {}
}

declare module 'material-ui-icons/WbIncandescent' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class WbIncandescent extends SvgIcon {}
}

declare module 'material-ui-icons/WbIridescent' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class WbIridescent extends SvgIcon {}
}

declare module 'material-ui-icons/WbSunny' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class WbSunny extends SvgIcon {}
}

declare module 'material-ui-icons/Wc' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Wc extends SvgIcon {}
}

declare module 'material-ui-icons/Web' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Web extends SvgIcon {}
}

declare module 'material-ui-icons/WebAsset' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class WebAsset extends SvgIcon {}
}

declare module 'material-ui-icons/Weekend' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Weekend extends SvgIcon {}
}

declare module 'material-ui-icons/Whatshot' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Whatshot extends SvgIcon {}
}

declare module 'material-ui-icons/Widgets' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Widgets extends SvgIcon {}
}

declare module 'material-ui-icons/Wifi' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Wifi extends SvgIcon {}
}

declare module 'material-ui-icons/WifiLock' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class WifiLock extends SvgIcon {}
}

declare module 'material-ui-icons/WifiTethering' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class WifiTethering extends SvgIcon {}
}

declare module 'material-ui-icons/Work' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class Work extends SvgIcon {}
}

declare module 'material-ui-icons/WrapText' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class WrapText extends SvgIcon {}
}

declare module 'material-ui-icons/YoutubeSearchedFor' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class YoutubeSearchedFor extends SvgIcon {}
}

declare module 'material-ui-icons/ZoomIn' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ZoomIn extends SvgIcon {}
}

declare module 'material-ui-icons/ZoomOut' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ZoomOut extends SvgIcon {}
}

declare module 'material-ui-icons/ZoomOutMap' {
  import SvgIcon from 'material-ui/SvgIcon';
  export default class ZoomOutMap extends SvgIcon {}
}