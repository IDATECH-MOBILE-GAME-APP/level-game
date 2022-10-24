import './App.css'
function gamewallpaper(){
    return (
        <>
        <div className="container">
            <div className="box">
                <div className="block">
                    <div className='head'>LEVEL</div>
                    <div className='form-control'>
                        <input type="checKbox" name="easylevel" value="Easy level"></input>
                        <span>Easy level</span>
                        <input type="checKbox" name="mediumlevel" value="Medium level"></input>
                        <span>Medium level</span>
                        <input type="checKbox" name="hardlevel" value="Hard level"></input>
                        <span>Hard level</span>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default gamewallpaper;