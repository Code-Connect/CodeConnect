import 'isomorphic-fetch'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {expect} from 'chai';
import {assert} from 'chai';
import * as actions from '../../../app/actions/mentor';
import reducer from '../../../app/reducers/projects'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('editor ', () => {
  it('test action for writing', () => {

    expect(reducer({
      mockData: [
        {
          input: "input1",
          output: "output1",
          description: "description1",
          task_id: 1,
          name: "name1"
        }, {
          input: "input4",
          output: "output4",
          description: "description4",
          task_id: 4,
          name: "name4"
        }
      ]
    }, {
      type: 'UPDATE_TEXT',
      task_id: 1,
      fieldtype: "input",
      newCode: "newCode"
    })).to.deep.equal({
      mockData: [
        {
          input: "newCode",
          output: "output1",
          description: "description1",
          task_id: 1,
          name: "name1"
        }, {
          input: "input4",
          output: "output4",
          description: "description4",
          task_id: 4,
          name: "name4"
        }
      ]
    });
  });
});

describe('mentor test ', () => {
  it('download repos', () => {

    fetchMock.mock('https://api.github.com/users/gapsong/repos', 'GET', [
      {
        "id": 62663885,
        "name": "BitmapServer",
        "full_name": "gapsong/BitmapServer",
        "owner": {
          "login": "gapsong",
          "id": 15983559,
          "avatar_url": "https://avatars2.githubusercontent.com/u/15983559?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/gapsong",
          "html_url": "https://github.com/gapsong",
          "followers_url": "https://api.github.com/users/gapsong/followers",
          "following_url": "https://api.github.com/users/gapsong/following{/other_user}",
          "gists_url": "https://api.github.com/users/gapsong/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/gapsong/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/gapsong/subscriptions",
          "organizations_url": "https://api.github.com/users/gapsong/orgs",
          "repos_url": "https://api.github.com/users/gapsong/repos",
          "events_url": "https://api.github.com/users/gapsong/events{/privacy}",
          "received_events_url": "https://api.github.com/users/gapsong/received_events",
          "type": "User",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/gapsong/BitmapServer",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/gapsong/BitmapServer",
        "forks_url": "https://api.github.com/repos/gapsong/BitmapServer/forks",
        "keys_url": "https://api.github.com/repos/gapsong/BitmapServer/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/gapsong/BitmapServer/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/gapsong/BitmapServer/teams",
        "hooks_url": "https://api.github.com/repos/gapsong/BitmapServer/hooks",
        "issue_events_url": "https://api.github.com/repos/gapsong/BitmapServer/issues/events{/number}",
        "events_url": "https://api.github.com/repos/gapsong/BitmapServer/events",
        "assignees_url": "https://api.github.com/repos/gapsong/BitmapServer/assignees{/user}",
        "branches_url": "https://api.github.com/repos/gapsong/BitmapServer/branches{/branch}",
        "tags_url": "https://api.github.com/repos/gapsong/BitmapServer/tags",
        "blobs_url": "https://api.github.com/repos/gapsong/BitmapServer/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/gapsong/BitmapServer/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/gapsong/BitmapServer/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/gapsong/BitmapServer/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/gapsong/BitmapServer/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/gapsong/BitmapServer/languages",
        "stargazers_url": "https://api.github.com/repos/gapsong/BitmapServer/stargazers",
        "contributors_url": "https://api.github.com/repos/gapsong/BitmapServer/contributors",
        "subscribers_url": "https://api.github.com/repos/gapsong/BitmapServer/subscribers",
        "subscription_url": "https://api.github.com/repos/gapsong/BitmapServer/subscription",
        "commits_url": "https://api.github.com/repos/gapsong/BitmapServer/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/gapsong/BitmapServer/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/gapsong/BitmapServer/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/gapsong/BitmapServer/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/gapsong/BitmapServer/contents/{+path}",
        "compare_url": "https://api.github.com/repos/gapsong/BitmapServer/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/gapsong/BitmapServer/merges",
        "archive_url": "https://api.github.com/repos/gapsong/BitmapServer/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/gapsong/BitmapServer/downloads",
        "issues_url": "https://api.github.com/repos/gapsong/BitmapServer/issues{/number}",
        "pulls_url": "https://api.github.com/repos/gapsong/BitmapServer/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/gapsong/BitmapServer/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/gapsong/BitmapServer/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/gapsong/BitmapServer/labels{/name}",
        "releases_url": "https://api.github.com/repos/gapsong/BitmapServer/releases{/id}",
        "deployments_url": "https://api.github.com/repos/gapsong/BitmapServer/deployments",
        "created_at": "2016-07-05T19:30:45Z",
        "updated_at": "2016-07-05T23:18:34Z",
        "pushed_at": "2016-09-21T15:11:36Z",
        "git_url": "git://github.com/gapsong/BitmapServer.git",
        "ssh_url": "git@github.com:gapsong/BitmapServer.git",
        "clone_url": "https://github.com/gapsong/BitmapServer.git",
        "svn_url": "https://github.com/gapsong/BitmapServer",
        "homepage": null,
        "size": 6400,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
      }
    ]);

    const store = mockStore({});

    return store.dispatch(actions.getReposGithub('https://api.github.com/users/gapsong/repos')).then(() => {
      expect(store.getActions()).to.deep.equal([
        {
          type: 'GET_REPOS',
          repos: [
            {
              description: null,
              name: "BitmapServer",
              project_id: 62663885,
              repourl: "https://github.com/gapsong/BitmapServer",
              tasks: []
            }
          ]
        }
      ]);
    });
  });
});
