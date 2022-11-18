import style from '/styles/Company_detail.module.css'


const offer = (offer)=>{
    const data = offer.offer[1]
    // console.log(data)
    return (
        <div className={style.body}>
            <p>{data?.title}</p>
            <p>salaire {data?.salary}€</p>
            <p>ville {data?.city}</p>
            <p>adresse {data?.place}</p>
            
    </div>

                
    );
};

export async function  getServerSideProps(context){
    let data = await fetch("http://localhost:3000/api/job_offers?param=id&id="+context.params.id).then(res=>res.json()).then(res=>res)
    // console.log(context)
    return{
        props: {jobs_offers : data}
    }
}
export default offer;