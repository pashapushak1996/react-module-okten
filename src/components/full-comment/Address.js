const Address = ({items: [addressKeys, addressObject]}) => {
    return (
        <div>
            { addressKeys.map((value, index) => {
                return (
                    <div key={ index }>
                        { typeof addressObject[value] !== "object" &&
                        <div>
                            <b>{ value }: </b>
                            <span>{ addressObject[value] }</span>
                        </div>
                        }
                    </div>
                )
            }) }
        </div>
    );
}

export default Address;
