export default function Comments (props) {
    let {id, name, email, body} = props;
    return (
        <div>
            <p>
                <b>ID: {id}</b>
                <br/>
                <b>Name:</b> {name}
                <br/>
                <b>Email:</b> {email}
                <br/>
                <b>Body:</b> {body}
                <br/>
            </p>
        </div>
    );
}