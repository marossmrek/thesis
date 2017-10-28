import React from 'react';

export class Timetable extends React.Component {
    render() {
        return (
            <div>
                <div className="content-wrapper" style={{minHeight: "916px"}}>
                    <section className="content-header">
                        <h1>
                            Timetable
                            <small>all my fucking school stuff</small>
                        </h1>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Hover Data Table</h3>
                                    </div>
                                    <div className="box-body">
                                        <div id="example2_wrapper"
                                             className="dataTables_wrapper form-inline dt-bootstrap">
                                            <div className="row">
                                                <div className="col-sm-6"></div>
                                                <div className="col-sm-6"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <table id="example2"
                                                           className="table table-bordered table-hover dataTable"
                                                           role="grid" aria-describedby="example2_info">
                                                        <thead>
                                                        <tr role="row">
                                                            <th className="sorting_asc" tabIndex="0"
                                                                aria-controls="example2" rowSpan="1" colSpan="1"
                                                                aria-sort="ascending"
                                                                aria-label="Rendering engine: activate to sort column descending">
                                                            </th>
                                                            <th className="sorting_asc" tabIndex="0"
                                                                aria-controls="example2" rowSpan="1" colSpan="1"
                                                                aria-sort="ascending"
                                                                aria-label="Rendering engine: activate to sort column descending">
                                                                7:30
                                                            </th>
                                                            <th className="sorting" tabIndex="0"
                                                                aria-controls="example2" rowSpan="1" colSpan="1"
                                                                aria-label="Browser: activate to sort column ascending">
                                                                9:15
                                                            </th>
                                                            <th className="sorting" tabIndex="0"
                                                                aria-controls="example2" rowSpan="1" colSpan="1"
                                                                aria-label="Platform(s): activate to sort column ascending">
                                                                11:00
                                                            </th>
                                                            <th className="sorting" tabIndex="0"
                                                                aria-controls="example2" rowSpan="1" colSpan="1"
                                                                aria-label="Engine version: activate to sort column ascending">
                                                                13:30
                                                            </th>
                                                            <th className="sorting" tabIndex="0"
                                                                aria-controls="example2" rowSpan="1" colSpan="1"
                                                                aria-label="CSS grade: activate to sort column ascending">
                                                                15:15
                                                            </th>
                                                            <th className="sorting" tabIndex="0"
                                                                aria-controls="example2" rowSpan="1" colSpan="1"
                                                                aria-label="CSS grade: activate to sort column ascending">
                                                                17:00
                                                            </th>
                                                            <th className="sorting" tabIndex="0"
                                                                aria-controls="example2" rowSpan="1" colSpan="1"
                                                                aria-label="CSS grade: activate to sort column ascending">
                                                                18:35
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr role="row" className="odd">
                                                            <td>Monday</td>
                                                            <td className="sorting_1"></td>
                                                            <td></td>
                                                            <td>SWI</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>MRIT</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr role="row" className="even">
                                                            <td>Tuesday</td>
                                                            <td className="sorting_1"></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>IM</td>
                                                            <td>FIN</td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr role="row" className="odd">
                                                            <td>Wednesday</td>
                                                            <td className="sorting_1"></td>
                                                            <td>SWI</td>
                                                            <td>MRIT</td>
                                                            <td>UI</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr role="row" className="even">
                                                            <td>Thursday</td>
                                                            <td className="sorting_1"></td>
                                                            <td></td>
                                                            <td>UI</td>
                                                            <td>GEO</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr role="row" className="odd">
                                                            <td>Friday</td>
                                                            <td className="sorting_1">SA</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        </tbody>
                                                        <tfoot>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}