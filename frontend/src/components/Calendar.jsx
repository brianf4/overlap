function Calendar() {
    let arr = [];
    for (let i = 1; i < 25; i++) {
        arr.push(i.toString());
    }
    return (
        <div className="calendar-containter">
            <div className="calendar">
                <div className="week row1">
                    <div className="corner">
                        <span>test</span>
                    </div>
                    <div>
                        <span>Sun</span>
                    </div>
                    <div>
                        <span>Mon</span>
                    </div>
                    <div>
                        <span>Tue</span>
                    </div>
                    <div>
                        <span>Wed</span>
                    </div>
                    <div>
                        <span>Thu</span>
                    </div>
                    <div>
                        <span>Fri</span>
                    </div>
                    <div>
                        <span>Sat</span>
                    </div>
                </div>
                <div className="row2">
                    <div className="corner"></div>
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
            </div>
        </div>
    );
}

export default Calendar;
