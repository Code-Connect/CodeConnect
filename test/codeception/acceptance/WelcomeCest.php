<?php


class WelcomeCest
{
    public function _before(AcceptanceTester $I)
    {

    }

    public function _after(AcceptanceTester $I)
    {
    }

    // tests
    public function test(AcceptanceTester $I)
    {
        $I->wantTo('Test welcome page');
        $I->amOnPage('/');
        $I->see('What is TYPO3 CMS?');

    }
}
