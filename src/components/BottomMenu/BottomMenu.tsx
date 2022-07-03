import classNames from 'classnames';
import { useState } from 'react';
import './BottomMenu.scss';

export const BottomMenu : React.FC = () => {
  const [name, setName] = useState('');
  const [nameNotValid, setValidOfName] = useState(false);

  const [price, setPrice] = useState(0);
  const [priceNotValid, setValidOfPrice] = useState(false);

  const [description, setDescription] = useState('');
  const [descriptionNotValid, setValidOfDescription] = useState(false);

  const [selectedFileName, setSelectedFileName] = useState('');
  const [isImageSelected, setImageSelected] = useState(false);

  return (
    <div className="bottomMenu">
      <form
        className="bottomMenu__form form"
        onSubmit={(event) => {
          event.preventDefault();

          if (name === '') {
            setValidOfName(true);
          }

          if(price <= 0) {
            setValidOfPrice(true);
          }

          if(description === '') {
            setValidOfDescription(true);
          }

          if(selectedFileName === '') {
            setValidOfDescription(true);
          }

          if (!nameNotValid && !priceNotValid && !descriptionNotValid) {
            const phoneToAdd = {
              'id': 500,
              'name' : name,
              'price' : price,
              'image' : selectedFileName,
              'description' : description,
            }

            localStorage.setItem('objToAdd', JSON.stringify(phoneToAdd))
          }
        }}
      >
        <div className="form__inputs">
          <label className="form__label" htmlFor="">
            name
            <input
              type="text"
              className={classNames("form__inputs--text", {'invalid_input' : nameNotValid})}
              value={name}
              onChange={(event) => {
                setName(event.target.value);

                if (nameNotValid) {
                  setValidOfName(!nameNotValid)
                }
              }}
            />
          </label>
          <label className="form__label" htmlFor="">
            price
            <input
              type="number"
              className={classNames("form__inputs--number", {'invalid_input' : priceNotValid})}
              value={price}
              min="0"
              onChange={(event) => {
                setPrice(Number(event.target.value))

                if (priceNotValid) {
                  setValidOfPrice(false)
                }
              }}
            />
          </label>        
        </div>
        <textarea
          className={classNames("form__textarea", {'invalid_input' : descriptionNotValid})}
          placeholder="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value)

            if (descriptionNotValid) {
              setValidOfDescription(!descriptionNotValid)
            }
          }}
        />
        <div>
          <label className="form__label" htmlFor="img_upload">
            image
            <input
              id="img_upload"
              className="form__input--image"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                const temp = event.target.value.slice(12, event.target.value.length)
                setSelectedFileName(temp)
              }}
            />
            <label htmlFor="img_upload" className="form__label--button">
              +
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