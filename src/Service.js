function Service(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.image}  alt="" className="card-image"/>
            </div>
            <h1 className="card-title">{props.title}</h1>
            <h3 className="card-subtitle">{props.subtitle}</h3>
            <p className="card-des">{props.Description}</p>
            <p className="btn-p">
              <button className="card-btn">Read More</button>
            </p>
        </div>

    )
}
export default Service;