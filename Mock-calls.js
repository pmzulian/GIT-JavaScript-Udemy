// Ir del caso más general, el truthy al más específico, el falsy
// Para cada if anidado, abrir un nuevo describe()

describe('setFrontVideo', () => {
  beforeEach(() => {
    // Mock de la función a evaluar su llamada
    Front.prototype.setVideoPlaylistData = jest.fn();
    // Mock de la función interna con return value
    Front.prototype.videoPlaylistId = jest.fn().mockReturnValue('videoPlaylistId');
  });

  test('should call setVideoPlaylistData once', () => {
    // Ejectua la función contenedora
    Front.prototype.setFrontVideo();
    // Hace expect de la función con this a evaluar
    expect(Front.prototype.setVideoPlaylistData.mock.calls).toEqual([['videoPlaylistId', true]]);
  });
