gdjs.LoadingScreenPixiRenderer = function(runtimeGamePixiRenderer, loadingScreenSetup) {
  this._pixiRenderer = runtimeGamePixiRenderer.getPIXIRenderer();
  if (!this._pixiRenderer) {
    // A PIXI Renderer can be missing during tests, when creating a runtime game
    // without a canvas.
    return;
  }

  this._loadingScreen = new PIXI.Container();

  this._progressText = new PIXI.Text(' ', {
    fontSize: '30px',
    fontFamily: 'Arial',
    fill: '#FFFFFF',
    align: 'center',
  });
  this._loadingScreen.addChild(this._progressText);

  this._madeByText = new PIXI.Text('Made by the GDevelop community', {
      fontSize: '30px',
      fontFamily: 'Arial',
      fill: '#FFFFFF',
      align: 'center',
    });
  this._madeByText.position.y = this._pixiRenderer.height / 2 - 130;
  this._loadingScreen.addChild(this._madeByText);
};

gdjs.LoadingScreenRenderer = gdjs.LoadingScreenPixiRenderer; //Register the class to let the engine use it.

gdjs.LoadingScreenPixiRenderer.prototype.render = function(percent) {
  if (!this._pixiRenderer) {
    return;
  }

  var screenBorder = 10;

  this._madeByText.position.x =
    this._pixiRenderer.width / 2 - this._madeByText.width / 2;
  this._madeByText.position.y =
    this._pixiRenderer.height / 2 -
    this._madeByText.height -
    20;

  this._progressText.text = percent + '%';
  this._progressText.position.x = screenBorder;
  this._progressText.position.y =
    this._pixiRenderer.height - this._progressText.height - screenBorder;

  this._pixiRenderer.render(this._loadingScreen);
};

gdjs.LoadingScreenPixiRenderer.prototype.unload = function() {
  // Nothing to do
};
