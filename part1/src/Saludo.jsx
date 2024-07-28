export const Saludo = (params) =>{

    console.log(params);

    return(
        <h1 style={{ color: params.color }}>
            {params.message}
        </h1>
    )

}