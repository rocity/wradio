import { IncludesModule } from './includes.module';

describe('IncludesModule', () => {
  let includesModule: IncludesModule;

  beforeEach(() => {
    includesModule = new IncludesModule();
  });

  it('should create an instance', () => {
    expect(includesModule).toBeTruthy();
  });
});
