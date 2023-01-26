import './Header.css';

function Header(props) {
	return (
		<header className="Header">
        <h1 className='Header-title'>Currency Visualization</h1>
            {/* flash warning only shows when state variable value is true, via class setting */}
            <div className={`Header-flashContainer ${props.isFlashDisplayed ? "isDisplayed" : ""}`}>
                <p className={'Header-flashMessage'}>SELECT NO MORE THAN {props.MaxNumOfComparisons} COMPARISONS.<br/>TO DESELECT A SELECTED CHOICE, click it.</p>
            </div>
        </header>
	)
}
export default Header;