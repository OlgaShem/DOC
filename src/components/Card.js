const Card = ({ src, alt, className, title, subtitle}) => {
    return (
        <div className={className ? `card__wrap card__wrap_${className}` : `card__wrap`}>
            <div className="card__img-block">
                <img src={src} alt={alt} className="card__img"/>
                <div className="card__text">
                    <p className="card__title">{title}</p>
                    <p className="card__subtitle">{subtitle}</p>
                </div>
            </div>
        </div>
)};


export default Card; 