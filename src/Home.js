import React from "react";

function Home() {
    return (<div className="grid-container">
            <div className="item1">
                Home
            </div>
            <div className="item2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel pharetra tortor. Sed auctor,
                    tellus
                    sed cursus convallis, nisi elit vehicula magna, vel posuere sapien lorem id arcu. Aliquam erat
                    volutpat.
                    Quisque ornare mattis quam, id venenatis arcu laoreet vitae. Nunc et ullamcorper purus. Aenean sit
                    amet
                    dictum arcu. Nunc consequat luctus cursus.
                </p>
                <p>
                    Curabitur rutrum diam nec dui pulvinar placerat. Morbi eget vulputate massa, sed congue lectus. Cras
                    quis neque mattis, maximus eros et, dictum enim. Integer diam purus, mattis at dui ac, fringilla
                    vulputate ex. Phasellus odio nulla, fermentum gravida maximus id, mollis quis velit. Cras interdum
                    luctus malesuada. Maecenas feugiat elit at malesuada rhoncus. Sed volutpat et ipsum sed cursus.
                    Suspendisse ultricies purus vel erat tincidunt convallis. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet velit nec diam bibendum
                    mattis.
                    Praesent posuere felis sed mauris accumsan, ut porttitor purus elementum.
                </p>
            </div>
            <div className="item3">
                <img src={require("./images/math-curriculum.jpg")} alt="Equations" width="90%" align="center"/>
            </div>
            s
            <div className="item4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus purus a nisi pretium
                    malesuada. Sed a ligula ac enim rhoncus sollicitudin in eget est. Aenean sit amet dui commodo sapien
                    luctus faucibus. Quisque ut lorem varius, dictum est et, mollis quam. Praesent posuere sit amet
                    magna ac volutpat. Maecenas urna purus, commodo ut arcu ut, rhoncus tristique lectus. Nullam blandit
                    ex in elit maximus, a pretium mauris placerat. Aenean mauris neque, aliquet at lorem et, tempor
                    facilisis tellus.
                </p>
                <p>Maecenas tristique est sit amet suscipit tempor. Suspendisse dignissim aliquam elit vel ullamcorper.
                    Cras libero leo, maximus id erat nec, commodo interdum justo. Mauris vel ex eu diam auctor aliquam
                    viverra quis ex. Etiam ex neque, porta eu commodo sit amet, tempor non quam. Fusce varius mauris
                    nibh, eget hendrerit dui tempus id. Nam pretium pretium ex, et venenatis velit tempor id. Vivamus
                    posuere sollicitudin hendrerit. Nunc dignissim nibh id bibendum aliquet. In ut diam nunc.
                </p>
            </div>
        </div>
    );
}

export default Home;