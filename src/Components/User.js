export default function User(props) {
    let {id, name, username} = props;
    return (
        <div>
            <p>
                {id}-{name}-{username}
            </p>
        </div>
    );
}