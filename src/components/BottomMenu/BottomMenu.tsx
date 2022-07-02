import './BottomMenu.scss';

export const BottomMenu : React.FC = () => {
  return (
    <div className="bottomMenu">
      <form
        className="bottomMenu__form form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="form__inputs">
          <label className="form__label" htmlFor="">
            name
            <input type="text" className="form__inputs--text" />
          </label>
          <label className="form__label" htmlFor="">
            price
            <input type="number" className="form__inputs--number" />
          </label>        
        </div>
        <textarea
          className="form__textarea"
          name=""
          placeholder="description"
          id=""/>
        <div>
          <label className="form__label" htmlFor="img_upload">
            image
            <input
              id="img_upload"
              className="form__input--image"
              type="file"
              accept="image/png, image/jpeg"
            />
            <label htmlFor="img_upload">
              123
            </label>
          </label>
        </div>
          <button className="form__submit" type="submit">
            Save
          </button>
      </form>
    </div>
  )
}