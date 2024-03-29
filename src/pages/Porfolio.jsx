import { useState } from 'react';
import GhostWriting from '../components/sections/Portfolio/GhostWriting/GhostWriting';
import Print from '../components/sections/Portfolio/Print/Print';
import Recents from '../components/sections/Portfolio/Recents/Recents';
import Translation from '../components/sections/Portfolio/Translation/Translation';

function Porfolio() {
  const [categoryArray, setCategoryArray] = useState({
    recents: true,
    print: false,
    ghostwriting: false,
    translation: false,
  });
  // name = selected categ
  const handleClick = (name) => {
    let categoryAux = {
      recents: false,
      print: false,
      ghostwriting: false,
      translation: false,
    };
    if (!name) {
      // name = vacío -> los cierra todos
      setCategoryArray(categoryAux);
    } else {
      setCategoryArray({
        ...categoryAux,
        [name]: true,
      });
    }
  };

  let currentCategory = Object.keys(categoryArray).filter(function (category) {
    return categoryArray[category];
  });

  let renderCurrentCategory = () => {
    switch (currentCategory.toString()) {
      case 'recents':
        return <Recents />;
      case 'print':
        return <Print />;
      case 'ghostwriting':
        return <GhostWriting />;
      case 'translation':
        return <Translation />;
      default:
        console.error('No Funciona el RenderCurrentCategory');
        break;
    }
  };

  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'>Career Profile</h2>
      <span className='section__subtitle'>Can add your work here like photos, downloadable pdf etc.</span>
        
      {/* <div className='portfolio__container container'>
        <div className='portfolio__tabs'>
          <div
            className='portfolio__button button--flex'
            onClick={() => handleClick('recents')}
            style={{
              color: categoryArray.recents ? 'white' : '',
              backgroundColor: categoryArray.recents
                ? 'var(--first-color)'
                : '',
            }}
          >
            Recents
          </div>
          <div
            className='portfolio__button button--flex'
            onClick={() => handleClick('print')}
            style={{
              color: categoryArray.print ? 'white' : '',
              backgroundColor: categoryArray.print ? 'var(--first-color)' : '',
            }}
          >
            Digital
          </div>
          <div
            className='portfolio__button button--flex'
            onClick={() => handleClick('translation')}
            style={{
              color: categoryArray.translation ? 'white' : '',
              backgroundColor: categoryArray.translation
                ? 'var(--first-color)'
                : '',
            }}
          >
            Translations
          </div>
          <div
            className='portfolio__button button--flex'
            onClick={() => handleClick('ghostwriting')}
            style={{
              color: categoryArray.ghostwriting ? 'white' : '',
              backgroundColor: categoryArray.ghostwriting
                ? 'var(--first-color)'
                : '',
            }}
          >
            Ghostwriting
          </div>
        </div>

        {renderCurrentCategory()}
      </div> */}
    </section>
  );
}

export default Porfolio;
