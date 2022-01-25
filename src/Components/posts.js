export default function Posts(props) {
    let {id, title, body} = props;
    return (
        <div>
            <p>
                <b>ID: {id}</b>
                <br/>
                <b>Title:</b> {title}
                <br/>
                <b>Body:</b> {body}
            </p>
        </div>
    );
}