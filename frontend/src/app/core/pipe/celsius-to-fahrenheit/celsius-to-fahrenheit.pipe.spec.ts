import { CelsiusToFahrenheitPipe } from './celsius-to-fahrenheit.pipe';

describe('CelsiusToFahrenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new CelsiusToFahrenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
