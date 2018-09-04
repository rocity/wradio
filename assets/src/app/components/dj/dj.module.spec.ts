import { DjModule } from './dj.module';

describe('DjModule', () => {
  let djModule: DjModule;

  beforeEach(() => {
    djModule = new DjModule();
  });

  it('should create an instance', () => {
    expect(djModule).toBeTruthy();
  });
});
