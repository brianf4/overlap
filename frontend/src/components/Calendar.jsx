const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


function Calendar() {
    let arr = [];
    for (let i = 1; i < 25; i++) {
        arr.push(i.toString());
    }
    return (
        <>
            {/* Row 1 */}
            <div className="row1">
                <div className="corner"></div>
                {DAYS.map(day => (
                    <div key={day}>
                        <span>{day}</span>
                    </div>
                ))}
            </div>
            <div className="row2">
                <div className="corner">
                    {arr.map((_, i) => {
                        return <div key={i + 1}></div>;
                    })}
                </div>
                <div className="column">
                    {arr.map((_, i) => {
                        return <div key={i + 1}></div>;
                    })}
                </div>
                <div className="column">
                    {arr.map((_, i) => {
                        return <div key={i + 1}></div>;
                    })}
                </div>
                <div className="column">
                    {arr.map((_, i) => {
                        return <div key={i + 1}></div>;
                    })}
                </div>
                <div className="column">
                    {arr.map((_, i) => {
                        return <div key={i + 1}></div>;
                    })}
                </div>
                <div className="column">
                    {arr.map((_, i) => {
                        return <div key={i + 1}></div>;
                    })}
                </div>
                <div className="column">
                    {arr.map((_, i) => {
                        return <div key={i + 1}></div>;
                    })}
                </div>
                <div className="column">
                    {arr.map((_, i) => {
                        return <div key={i + 1}></div>;
                    })}
                </div>
            </div>
        </>
    );
}

export default Calendar;
