const ref = process.env.GITHUB_REF || "main";

const branch = ref.split("/").pop();

const branches = [
  "main",
  {
    name: "develop",
    prerelease: true
  }
]

const plugins = [
  [
    "@semantic-release/commit-analyzer",
    {
      "releaseRules": [
        {
          "type": "build",
          "release": "patch"
        },
        {
          "type": "docs",
          "release": "patch"
        },
        {
          "type": "refactor",
          "release": "patch"
        },
        {
          "type": "style",
          "release": "patch"
        },
        {
          "type": "test",
          "release": "patch"
        }
      ]
    }
  ],
  ,
  "@semantic-release/release-notes-generator",
  [
    "@semantic-release/git",
    {
      "assets": ["CHANGELOG.md"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }
  ],
  // [
  //   "@semantic-release/github", {
  //     successComment: false,
  //     failComment: false
  //   }
  // ]
]

const isRelease = branches.some(it => it === branch || it.name === branch && !it.prerelease);

if (isRelease) {
  branches.push("@semantic-release/changelog");
}

module.exports = {
  branches,
  plugins
}