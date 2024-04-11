export function PlayerItem({ name, deletePlayer }) {
    return (
        <li className="playerRow">
            <label>
                {name}
            </label>
            <button className="btn delete" onClick={() => deletePlayer(name)}>Remove</button>
        </li>
    )
}