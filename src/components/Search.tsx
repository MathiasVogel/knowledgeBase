import { DocSearch } from '@docsearch/react';

import '@docsearch/css';
import '../css/search-box.css';

function Search() {
  return (
    <div className='search-component'>
      <DocSearch
        appId="EPUTRR9NEG"
        indexName="mathias-vogel"
        apiKey="d08bf873f25dce658539c15e144c25e2"
      />
    </div>
  );
}

export default Search;