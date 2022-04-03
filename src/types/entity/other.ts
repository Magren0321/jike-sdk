import type { Topic } from './topic'
import type {
  Picture,
  ReadTrackInfo,
  Rollouts,
  ScrollingSubtitle,
  UrlsInText,
} from './post'
import type { User } from './user'

export type PostTypeRaw = 'ORIGINAL_POST' | 'REPOST'
export type TargetType = PostTypeRaw | 'STORY'

export interface PostDetail {
  id: string
  type: PostTypeRaw | 'PERSONAL_UPDATE'
  content: string
  /** 评论并转发到动态时存在。仅评论转发的内容，不包含上层评论 */
  rawContent?: string
  urlsInText: UrlsInText[]
  status: string
  isCommentForbidden: boolean
  likeCount: number
  commentCount: number
  repostCount: number
  shareCount: number
  pictures: any[]
  collected: boolean
  collectTime?: any
  user: User
  createdAt: string
  isFeatured: boolean
  enablePictureComments: boolean
  repostable: boolean
  rollouts: Rollouts
  scrollingSubtitles: ScrollingSubtitle[]
  actionTime?: string
  pinned?: {
    personalUpdate: boolean
  }
  target?: Target
  targetType?: string
  rootType?: string
  liked?: boolean
  syncCommentId?: string
  replyToComment?: Comment
}

export interface Target {
  type: string
  id: string
  content: string
  urlsInText: UrlsInText[]
  status: string
  user: User
  commentCount: number
  repostCount: number
  likeCount: number
  shareCount: number
  rootType: string
  pictures: any[]
  createdAt: string
  liked: boolean
  collected: boolean
  syncCommentId: string
}

interface ReplyToComment {
  type: string
  id: string
  targetType: string
  targetId: string
  threadId: string
  createdAt: Date
  level: number
  content: string
  likeCount: number
  replyCount: number
  status: string
  user: User
}

interface HotReply {
  type: string
  id: string
  targetType: string
  targetId: string
  threadId: string
  createdAt: Date
  level: number
  content: string
  likeCount: number
  replyCount: number
  status: string
  user: User
  pictures: Picture[]
  replyToComment: ReplyToComment
}

export interface Comment {
  type: 'COMMENT'
  id: string
  targetType: string
  targetId: string
  threadId: string
  createdAt: string
  level: number
  content: string
  urlsInText: UrlsInText[]
  likeCount: number
  replyCount: number
  status: string
  user: User
  pictures: Picture[]
  liked: boolean
  hotReplies: HotReply[]
  enablePictureComments: boolean
  readTrackInfo: ReadTrackInfo
  collapsed: boolean
  collapsible: boolean
  isPinned: boolean
  hideable: boolean
  deletable: boolean
  pinnable: boolean
}

interface Payload {
  id: string
  feedType: string
  type: string
  key: string
  reason: string
  readTrackInfo: ReadTrackInfo
}

interface Reason {
  key: string
  text: string
  payload: Payload
}

interface DislikeMenu {
  title: string
  subtitle: string
  reasons: Reason[]
}

export interface RecommendPost {
  id: string
  readTrackInfo: ReadTrackInfo
  dislikeMenu: DislikeMenu
  user: User
  topic: Topic
  content: string
  pictures: Picture[]
  likeCount: number
  commentCount: number
  repostCount: number
  shareCount: number
  createdAt: Date
  type: string
}