import React, { Component, Fragment } from 'react';

import Header from '../Header';
import Post from '../Post';

import { StyleApp } from './style/StyleApp';

import '../../style/geral.scss';

export default class App extends Component {
  render() {
    const data = [
      {
        name: 'Paul Decotiis',
        time: 'há 3 min',
        url: '/images/farmer.svg',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis',
        alt: 'Imagem 1',
      },
      {
        name: 'Ruben Sanchez',
        time: 'há 5 min',
        url: '/images/doctor.svg',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis',
        alt: 'Imagem 2',
      },
      {
        name: 'Julie Flogeac',
        time: 'há 10 min',
        url: '/images/student.svg',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis',
        alt: 'Imagem 3',
      },
    ];

    return (
      <StyleApp>
        <Header />
        <div className="container">
          {data.map(data => (
            <Post data={data} />
          ))}
        </div>
      </StyleApp>
    );
  }
}
