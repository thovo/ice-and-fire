import { GetIdPipe } from './get-id.pipe';
import { MakeRouterLinkPipe } from './make-router-link.pipe';

describe('MakeRouterLinkPipe', () => {
  it('create an instance', () => {
    const pipe = new MakeRouterLinkPipe();
    expect(pipe).toBeTruthy();
  });
});
