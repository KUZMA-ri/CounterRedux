
import { LIGHT_THEME, DARK_THEME } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import Counter from './components/Counter';

const App = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);      

  const changeColorLight = () => {
    dispatch(LIGHT_THEME);
  }

  const changeColorDark = () => {
    dispatch(DARK_THEME);
  }

  return (
    <>
      <div 
        className="App" 
        style={theme === 'светлая тема' 
              ? { backgroundColor: 'white', 
                  color: 'black',
                  width: '100%',
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                } 
              : { backgroundColor: 'black', 
                  color: 'white',
                  width: '100%',
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",}}>
        {theme && 
          <button 
            onClick={changeColorLight} 
            style={{marginRight: "25px",
                    padding: "10px 20px",
                    backgroundColor: "yellow",
                    border: "none",
                    borderRadius: "10px", 
                    cursor: "pointer",
                    boxShadow: "0px 5px 8px 3px rgba(0, 0, 0, 0.3)"
                  }}
            >Light theme
          </button>
        }
        
        {theme && 
          <button 
            onClick={changeColorDark}
            style={{marginRight: "25px",
                    padding: "10px 20px",
                    backgroundColor: "yellow",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow: "0px 5px 8px 3px rgba(0, 0, 0, 0.3)"
                  }}
            >Dark theme
          </button>
        }
      </div>
      <Counter />
    </>
  );
}

export default App;
