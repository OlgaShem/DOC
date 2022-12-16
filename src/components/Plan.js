import List from './List';

const Plan = ({ className, name, price, text, buttonClass, buttonText, listClass }) => {
    return (
        <div className={className ? `plan plan_${className}` : `plan`}>
            <div className="plan__content">
                <p className="plan__name">{name}</p>
                <h2 className="plan__price">{price}</h2>
                <p className="plan__text">{text}</p>
                <List className={className ? `plan__list plan__list_${listClass}` : `plan__list`}/> 
                <div className='plan__btn-block'>
                    <button className={buttonClass ? `plan__btn plan__btn_${buttonClass}` : `plan__btn`}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
       
    
)};



export default Plan;