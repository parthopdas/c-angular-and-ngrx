import { HomeComponent } from './home.component';
​
describe('component: home', () => {
  it('have a title of "The title"', () => {
    const component = new HomeComponent();
    expect(component.title).toEqual('The title');
  });
});
