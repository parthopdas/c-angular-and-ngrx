import { HomeModule } from './home.module';

describe('HomeModule', () => {
  let eventModule: HomeModule;

  beforeEach(() => {
    eventModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(eventModule).toBeTruthy();
  });
});
