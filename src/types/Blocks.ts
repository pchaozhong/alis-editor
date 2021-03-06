export interface Block {
  type: string
  payload?: any
  children: Block[]
}

export interface ParagraphBlock extends Block {
  type: 'Paragraph',
  children: Block[]
}

export interface TextBlock extends Block {
  type: 'Text',
  payload: {
    body: string
  }
}

export interface LinkBlock extends Block {
  type: 'Link',
  payload: {
    href: string
  },
  children: TextBlock[]
}

/*
「詳細は [こちら](https://example.com) から確認できます」を再現する場合
[
  {
    type: 'Paragraph',
    children: [
      {
        type: 'Text',
        payload: {
          body: '詳細は'
        }
      },
      {
        type: 'Link',
        payload: {
          href: 'https://example.com'
        },
        children: [
          {
            type: 'Text',
            payload: {
              body: 'こちら'
            }
          }
        ]
      },
      {
        type: 'Text',
        payload: {
          body: 'から確認できます'
        }
      }
    ]
  }
]

*/
