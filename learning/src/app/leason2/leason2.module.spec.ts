import { Leason2Module } from './leason2.module';

describe('Leason2Module', () => {
  let leason2Module: Leason2Module;

  beforeEach(() => {
    leason2Module = new Leason2Module();
  });

  it('should create an instance', () => {
    expect(leason2Module).toBeTruthy();
  });
});
