<?php


class ContributorCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    public function _after(AcceptanceTester $I)
    {
    }

    public function loadNavBar(AcceptanceTester $I)
    {
        $I->wantTo('Load ContributorPage');
        $I->amOnPage('/contributor');
        $I->canSeeElement('.navbar');
    }
}
