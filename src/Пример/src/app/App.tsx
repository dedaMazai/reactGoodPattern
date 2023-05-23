import * as React from 'react';

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    const name = 'fbdbd';
    return (
      <>
        <h1>
          Hello {name}
        </h1>
      </>
    );
  }
}

export default App;