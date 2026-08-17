import Calendar from "../components/Calendar";

function CalendarSheet() {
    return (
        <div className="calendar-containter">
            <div className="topBarCalendar">
                <span className="text-green-500">Logo here</span>
                {/* The button's popoverTarget attribute points to the modal's ID. ID must be unique for each modal */}
                <button className="btn" popoverTarget="my-modal-2">
                    Open
                </button>

                <div className="modal" id="my-modal-2" popover="true">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">
                            Press ESC key or click the button below to close
                        </p>
                    </div>
                    <div className="modal-backdrop">
                        <button
                            popoverTarget="my-modal-2"
                            popoverTargetAction="hide"
                        >
                            close
                        </button>
                    </div>
                </div>
            </div>
            <Calendar></Calendar>
        </div>
    )
}
export default CalendarSheet;
