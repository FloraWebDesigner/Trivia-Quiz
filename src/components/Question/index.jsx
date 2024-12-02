export default function Question({ selectedId }) {
    return (
        <div>
            <h2>Selected Category ID: {selectedId || "None"}</h2>
        </div>
    );
}