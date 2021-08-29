import { IRenderer, IRenderDimensions, CharacterJoinerHandler, IRequestRedrawEvent } from 'browser/renderer/Types';
import { Disposable } from 'common/Lifecycle';
import { IColorSet, ILinkifier, ILinkifier2 } from 'browser/Types';
import { ICharSizeService } from 'browser/services/Services';
import { IOptionsService, IBufferService } from 'common/services/Services';
import { IEvent } from 'common/EventEmitter';
export declare class DomRenderer extends Disposable implements IRenderer {
    private _colors;
    private readonly _element;
    private readonly _screenElement;
    private readonly _viewportElement;
    private readonly _linkifier;
    private readonly _linkifier2;
    private readonly _charSizeService;
    private readonly _optionsService;
    private readonly _bufferService;
    private _rowFactory;
    private _terminalClass;
    private _themeStyleElement;
    private _dimensionsStyleElement;
    private _rowContainer;
    private _rowElements;
    private _selectionContainer;
    dimensions: IRenderDimensions;
    get onRequestRedraw(): IEvent<IRequestRedrawEvent>;
    constructor(_colors: IColorSet, _element: HTMLElement, _screenElement: HTMLElement, _viewportElement: HTMLElement, _linkifier: ILinkifier, _linkifier2: ILinkifier2, _charSizeService: ICharSizeService, _optionsService: IOptionsService, _bufferService: IBufferService);
    dispose(): void;
    private _updateDimensions;
    setColors(colors: IColorSet): void;
    private _injectCss;
    onDevicePixelRatioChange(): void;
    private _refreshRowElements;
    onResize(cols: number, rows: number): void;
    onCharSizeChanged(): void;
    onBlur(): void;
    onFocus(): void;
    onSelectionChanged(start: [number, number] | undefined, end: [number, number] | undefined, columnSelectMode: boolean): void;
    private _createSelectionElement;
    onCursorMove(): void;
    onOptionsChanged(): void;
    clear(): void;
    renderRows(start: number, end: number): void;
    private get _terminalSelector();
    registerCharacterJoiner(handler: CharacterJoinerHandler): number;
    deregisterCharacterJoiner(joinerId: number): boolean;
    private _onLinkHover;
    private _onLinkLeave;
    private _setCellUnderline;
}
//# sourceMappingURL=DomRenderer.d.ts.map