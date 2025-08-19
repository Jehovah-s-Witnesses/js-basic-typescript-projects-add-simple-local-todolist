export const Layout = {
  render(items : Element [] = []) : void {
    const wrapper : HTMLDivElement = document.createElement('div');
    const childrenWrapper : HTMLDivElement = document.createElement('div');

    wrapper.classList.add('container', 'pt-4');
    childrenWrapper.classList.add('col');

    wrapper.append(childrenWrapper);
    childrenWrapper.append(...items);
    document.body.append(wrapper);
  },
};
