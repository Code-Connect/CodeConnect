<?php


class HomePageCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    public function _after(AcceptanceTester $I)
    {
    }

    public function loadNavBar(AcceptanceTester $I)
    {
        $I->wantTo('Load HomePage');
        $I->amOnPage('/');
        $I->canSeeElement('.navbar');
    }

    public function login(AcceptanceTester $I)
    {
        $I->wantTo('Login with GitHub');
        $I->amOnPage('/');
        $I->click('Log in');
        $I->fillField('#login_field','username');
        $I->fillField('#password','password');
        $I->click('Sign in');
    }
}
