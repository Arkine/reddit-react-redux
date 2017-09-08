import { createActionNames, createActionCreators } from 'common/autostore'
import Post from 'models/Post'

export const postActionNames = createActionNames(Post)

export const postActionCreators = createActionCreators(Post, postActionNames)
