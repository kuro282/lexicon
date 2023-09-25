---
title: Discourse Features Support Lexicon
---

Below is a table of Discourse features which provides the details and current status about the support for a given feature in Lexicon.

If we missed one, or anything looks out of date here, don't hesitate to submit a Pull Request which updates the table.

**Table Legend**

| Emoji | Meaning                                      |
| ----- | -------------------------------------------- |
| ✅    | Supported in Lexicon-powered mobile apps     |
| ❌    | Not supported in Lexicon-powered mobile apps |
| 🔧    | Requires some configuration                  |
| 🔨    | Planned or under development                 |

| Feature                                     | Description                                                                                                                                                                     | Supported | Notes                                                                                                                                                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2FA Login                                   | Allow users with 2FA enabled to be prompted for their 2FA code when logging in                                                                                                  | ✅        | Managing 2FA, such as enabling it or disabling it from within the app, is not currently supported.                                                                                                                                         |
| Ability to Tag Topics                       | Create and tag topics to provide relevant metadata for your users.                                                                                                              | ✅ 🔧     | Configuration required: see [Optimal Experience](optimal#enable-topic-tagging).                                                                                                                                                            |
| Topic Previews (Excerpts)                   | Show an excerpt of the first post in a topic from the Home screen.                                                                                                              | ✅ 🔧     | Configuration required: see [Optimal Experience](optimal#enable-topic-excerpts).                                                                                                                                                           |
| View User Activity                          | View a user's recent activity—such as topics, posts, and likes—in a single feed from their profile.                                                                             | ✅        | The ability to filter by activity is not currently supported.                                                                                                                                                                              |
| Topic Metrics                               | Likes, Views, Replies, and Frequent Posters                                                                                                                                     | ✅        |                                                                                                                                                                                                                                            |
| Topic & Post Actions                        | Ability to like and edit topics and posts                                                                                                                                       | ✅        |                                                                                                                                                                                                                                            |
| View Top & Latest Topics                    | A Tab View at the top of the main feed provides the ability to switch between Latest and Top activity                                                                           | ✅        |                                                                                                                                                                                                                                            |
| Search                                      | Search the current Discourse instance for topics and posts based on keywords, categories, and tags                                                                              | ✅        |                                                                                                                                                                                                                                            |
| Categories                                  | View the category of a topic and filter topics by a given category                                                                                                              | ✅        | Categories cannot be created, updated, or deleted.                                                                                                                                                                                         |
| Attaching Media to Posts                    | Users can attach media to a post from the app                                                                                                                                   | ✅ 🔧     | Configuration recommended for supported file extensions-see [Optimal Experience](optimal#configure-upload-extensions)                                                                                                                      |
| Standard Markdown                           | Standard Markdown is supported in the editor and rendered correctly in the mobile app                                                                                           | ✅        | Light, incomplete support exists for some of Discourse's custom markup, such as dates.                                                                                                                                                     |
| Sign Up                                     | Allow users to sign up for an account directly through the mobile app, depending on whether your Discourse instance allows new user registration or not                         | ✅        |                                                                                                                                                                                                                                            |
| Browsing Public Instances                   | Allow users to immediately access and browse your Discourse instance from the mobile app if it is not private                                                                   | ✅        | Users will be prompted to login upon attempting an authenticated action.                                                                                                                                                                   |
| User Profiles                               | Ability to view users' profiles and edit your own                                                                                                                               | ✅        | Partial Support. The profile screen displays the user's photo, username, Markdown bio on a single line, and recent activity.                                                                                                               |
| Post Flagging                               | Allow users to flag posts for admins to review                                                                                                                                  | ✅        | Admins are not able to review posts in the app, though they will see in-app notifications for flags                                                                                                                                        |
| In-App Notifications                        | Allow users to see new notifications from the profile screen of the mobile app and mark all notifications as read                                                               | ✅        | Some notifications from Discourse are not tappable in the mobile app, such as badge notifications.                                                                                                                                         |
| Private messaging                           | Allow users to start private or group messages with one another                                                                                                                 | ✅        |                                                                                                                                                                                                                                            |
| Mentions                                    | Allow users to mention a user when creating or editing posts and messages.                                                                                                      | ✅        |
| Color Mode                                  | Provides light and dark mode support for users.                                                                                                                                 | ✅        | Users can manually specify light or dark mode, or allow their device's settings to dictate the current color mode. This does not synchronize with the Discourse web theme (if the user happens to have chosen a Dark theme on the website) |
| Badges                                      | The ability to see and interact with badges that have been awarded to users on the Discourse instance                                                                           | ❌        |                                                                                                                                                                                                                                            |
| Post Drafts                                 | Enable users to start composing a draft of a post and return to it later                                                                                                        | ❌        |                                                                                                                                                                                                                                            |
| Groups                                      | Enable users to create and participate in private groups of which only group members can view certain topics                                                                    | ❌        |                                                                                                                                                                                                                                            |
| Admin Features                              | Discourse provides an entire admin panel for managing and moderating the forum. These features are not available in Lexicon, and may be better suited to a desktop environment. | ❌        | Editing posts is supported                                                                                                                                                                                                                 |
| Post Quotes, Polls, Toggles, and Task Lists | Custom text formatting that enables Discourse-specific features                                                                                                                 | ❌ 🔨     |                                                                                                                                                                                                                                            |
| Discourse Emojis                            | Utilize emojis when creating a topic, making a post, or sending a reply.                                                                                                        | ✅        | Unicode-based emojis are of course supported. BBCode emoji is already support in lexicon Beta for example `:smile:` or `:raised_back_of_hand:t5:`                                                                                          |
| Post Bookmarks                              | Allow users to bookmark certain posts or topics                                                                                                                                 | ❌        |                                                                                                                                                                                                                                            |
| DiscourseConnect (SSO)                      | Replace Discourse authentication with a Custom Provider                                                                                                                         | ❌        |                                                                                                                                                                                                                                            |
| Custom Authentication Plugins               | Login via OAuth2 or other protocols using custom Discourse Plugins                                                                                                              | ❌        |                                                                                                                                                                                                                                            |
| Real-time Chat                              | Enable users to initiate conversations using the chat feature, either in a channel or through private messaging.                                                                | ❌        |                                                                                                                                                                                                                                            |
| User Status                                 | Allow other user in community to see user message status                                                                                                                        | ❌        |                                                                                                                                                                                                                                            |

Please note that this table is subject to change as the Lexicon Mobile App evolves, and new features may be added or existing features may be improved based on user feedback and development efforts.