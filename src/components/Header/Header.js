

function Header() {
	return (
		<header className="Header">
        <h1 className='Header-title'>Currency Visualization</h1>
            {/* flash warning only shows based upon value of state variable, via class setting */}
          {/*  <div className={`Header-flashContainer ${isFlashDisplayed ? "isDisplayed" : ""}`}>
                <p className={'Header-flashMessage'}>SELECT NO MORE THAN {MaxNumOfComparisons} COMPARISONS.<br/>TO DESELECT A SELECTED CHOICE, click it.</p>
            </div>*/}
        </header>
	)
}


export default Header;