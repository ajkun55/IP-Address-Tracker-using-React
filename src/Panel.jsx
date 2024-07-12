function Panel({ data }) {
  //`${data.location.country} ${data.location.city}`{data.location.timezone}
  return (
    <div className="panel">
      <div>
        <p className="name">IP Address</p>
        <p className="value">{data?.ip}</p>
      </div>
      <div>
        <p className="name">Location</p>
        <p className="value">
          {data?.location?.country} {data?.location?.city}
        </p>
      </div>
      <div>
        <p className="name">Timezone</p>
        <p className="value">{data?.location?.timezone}</p>
      </div>
      <div>
        <p className="name">ISP</p>
        <p className="value">{data?.isp || "Unknown"}</p>
      </div>{" "}
    </div>
  );
}

export default Panel;
