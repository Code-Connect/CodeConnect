<?php


class HomePageCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    public function _after(AcceptanceTester $I)
    {
    }

    public function load(AcceptanceTester $I)
    {
        $I->wantTo('Test HomePage');
        $I->amOnPage('/');
        $I->see('Code Connect');
    }
}
