import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import SidebarOption from './SidebarOption';
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

const Sidebar = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <Button
                className="sidebar-compose"
                startIcon={<AddIcon fontSize="large" />}
                onClick={() => dispatch(openSendMessage())}
            >
                Compose
            </Button>

            <SidebarOption
                Icon={InboxIcon}
                title="Inbox"
                number="126"
                selected={true}
            />
            <SidebarOption
                Icon={StarIcon}
                title="Starred"
                number="46"
            />
            <SidebarOption
                Icon={AccessTimeIcon}
                title="Snoozed"
                number="74"
            />
            <SidebarOption
                Icon={LabelImportantIcon}
                title="Important"
                number="54"
            />
            <SidebarOption
                Icon={SendIcon}
                title="Sent"
                number="89"
            />
            <SidebarOption
                Icon={NoteIcon}
                title="Drafts"
                number={26}
            />
            <SidebarOption
                Icon={ExpandMoreIcon}
                title="more"
            />
            <div className="sidebar-footer">
                <div className="sidebar-footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
