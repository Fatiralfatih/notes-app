import { func } from "prop-types";
import { useContext, useState } from "react"
import { FaCheck } from "react-icons/fa"
import LocaleContext from "../Context/localeContext";

const NoteInput = ({ addNote }) => {

    const [input, setInput] = useState({
        title: '',
        body: '',
    })

    const handleTitleChange = (event) => {
        if (50 > input.title.length) {
            setInput((prevInput) => ({ ...prevInput, title: event.target.value }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addNote({
            title: input.title,
            body: input.body,
        })
    }

    const { locale } = useContext(LocaleContext);

    return (
        <form className='add-new-page__input' onSubmit={handleSubmit}>
            <p
                className='add-new-page__input__title__char-limit'
            >
                {locale === 'id' ? 'Maksimal karakter' : 'Maximum character'}
                : {50 - input.title.length}
            </p>
            <input
                className='add-new-page__input__title'
                type="text"
                name="title"
                placeholder={locale === 'id' ? 'Masukkan title...' : 'Enter title...'}
                value={input.title}
                onChange={handleTitleChange}
            />
            <textarea
                className='add-new-page__input__body'
                type="text"
                placeholder={locale === 'id' ? 'Masukkan detail catatan...' : 'Enter body...'}
                value={input.body}
                onChange={(e) => setInput((prevInput) => ({ ...prevInput, body: e.target.value }))}
            ></textarea>
            <div className='add-new-page__action'>
                <button type='submit' className='action'><FaCheck size={30} />
                </button>
            </div>
        </form>
    )
}

NoteInput.propTypes = {
    addNote: func
}

export default NoteInput
