import "./eventcard.css"

function Eventcard(props: any) {
  return (
    <>
      <div className="event-card">
        <div className="event-img-placeholder">
          <span>{props.luna}</span>
        </div>
        <span className="event-status status-upcoming">{props.status}</span>
        <div className="event-body">
          <div className="event-meta">
            <div className="event-date">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" stroke-width="1.4" /><path d="M1 7h14" stroke="currentColor" stroke-width="1.4" /><path d="M5 1v4M11 1v4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
              {props.data}
            </div>
            <div className="event-location">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.485-2.015-4.5-4.5-4.5z" stroke="currentColor" stroke-width="1.4" /><circle cx="8" cy="6" r="1.5" stroke="currentColor" stroke-width="1.2" /></svg>
              {props.judet}
            </div>
          </div>
          <div className="event-name">{props.title}</div>
          <p className="event-desc">{props.descriere}</p>
          <div className="event-tags">
            <span className="event-tag highlight">{props.about[0]}</span>
            <span className="event-tag">{props.about[1]}</span>
            <span className="event-tag">{props.about[2]}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eventcard