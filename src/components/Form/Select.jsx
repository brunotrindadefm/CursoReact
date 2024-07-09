import styles from './Select.module.css'

function Select({ options, text, name, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select 
            required
            name={name} 
            id={name} 
            onChange={handleOnChange} 
            value={value || ''}
            >
                <option>Selecione uma opção</option>
                {options.map((options) => (
                    <option value={options.id} key={options.id}>
                        {options.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select